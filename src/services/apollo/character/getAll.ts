import type { ICharacter } from '@/models/character';
import { client } from '@/services/apollo/apolloClient';
import type { InforDto, ResponseProps } from '@/services/axios/types';
import { GET_ALL_CHARACTERS } from './queryGetAll';
import { ENV } from '@/utils/env';

export interface GetAllCharactersVars {
  page?: number;
  name?: string;
  filter?: { name?: string };
}

export interface GetAllCharactersData {
  characters: {
    info: InforDto;
    results: Array<{
      id: string;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: { name: string };
      location: { name: string };
      image: string;
      episode: { id: string }[];
      created: string;
    }>;
  };
}

export async function getAllCharactersApollo(
  params?: GetAllCharactersVars
): Promise<ResponseProps<ICharacter>> {
  const filter = { name: params?.name };
  try {
    const { data } = await client.query<
      GetAllCharactersData,
      GetAllCharactersVars
    >({
      query: GET_ALL_CHARACTERS,
      variables: {
        page: params?.page,
        filter,
      },
      fetchPolicy: 'no-cache',
    });

    if (!data?.characters) {
      throw new Error('Nenhum personagem encontrado');
    }

    const baseCharacterUrl = `${ENV.VITE_API_URL}/character`;
    const baseLocationUrl = `${ENV.VITE_API_URL}/location`;
    const baseEpisodeUrl = `${ENV.VITE_API_URL}/episode`;

    // 🔁 Normalization to REST format
    const formattedResults = data.characters.results.map((char) => ({
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

    // 🔁 Normalization to REST format
    const formattedInfo = {
      count: data.characters.info.count,
      pages: data.characters.info.pages,
      next: data.characters.info.next
        ? `${baseCharacterUrl}?page=${data.characters.info.next}`
        : null,
      prev: data.characters.info.prev
        ? `${baseCharacterUrl}?page=${data.characters.info.prev}`
        : null,
    };

    return {
      info: formattedInfo,
      results: formattedResults,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Erro ao buscar personagens');
  }
}
