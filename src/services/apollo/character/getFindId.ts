import type { ICharacter } from '@/models/character';
import { client } from '@/services/apollo/apolloClient';

import { handleApiError } from '@/services/axios/error';
import { ENV } from '@/utils/env';
import { GET_CHARACTERS_BY_IDS } from './queryFindId';

interface ParamsGetById {
  id: number[];
}

interface GetCharactersByIdsData {
  charactersByIds: Array<{
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: { name: string };
    location: { name: string };
    episode: { id: string }[];
    created: string;
  }> | null;
}

export async function getFindIdCharactersApollo(
  params?: ParamsGetById
): Promise<ICharacter[]> {
  try {
    if (!params) throw handleApiError({ message: 'Params is required' });
    if (params.id.length <= 0) return [];

    const { data } = await client.query<GetCharactersByIdsData>({
      query: GET_CHARACTERS_BY_IDS,
      variables: { ids: params.id.map(String) },
      fetchPolicy: 'no-cache',
    });

    if (!data?.charactersByIds) return [];

    const baseCharacterUrl = `${ENV.VITE_API_URL}/character`;
    const baseLocationUrl = `${ENV.VITE_API_URL}/location`;
    const baseEpisodeUrl = `${ENV.VITE_API_URL}/episode`;
    // 🔁 Normalization to REST format
    return data.charactersByIds.map((char) => ({
      id: Number(char.id),
      name: char.name,
      status: char.status,
      species: char.species,
      type: char.type,
      gender: char.gender,
      origin: {
        name: char.origin.name,
        url: `${baseLocationUrl}/${char.origin.name
          .replace(/\s+/g, '-')
          .toLowerCase()}`,
      },
      location: {
        name: char.location.name,
        url: `${baseLocationUrl}/${char.location.name
          .replace(/\s+/g, '-')
          .toLowerCase()}`,
      },
      image: char.image,
      episode: char.episode.map((ep) => `${baseEpisodeUrl}/${ep.id}`),
      url: `${baseCharacterUrl}/${char.id}`,
      created: char.created,
    }));
  } catch (error) {
    throw handleApiError(error);
  }
}
