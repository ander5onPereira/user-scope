import type { ICharacter } from '@/models/character';
import { client } from '@/services/apollo/apolloClient';
import { ENV } from '@/utils/env';
import { GET_CHARACTER_BY_ID } from './queryGetById';

interface GetCharacterByIdVars {
  id: number;
}

interface GetCharacterByIdData {
  character: {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
    origin: { name: string };
    location: { name: string };
    episode: { id: string }[];
  };
}

export async function getByIdCharactersApollo(
  params?: GetCharacterByIdVars
): Promise<ICharacter> {
  if (!params?.id) {
    throw new Error('ID é obrigatório');
  }

  try {
    const { data } = await client.query<
      GetCharacterByIdData,
      GetCharacterByIdVars
    >({
      query: GET_CHARACTER_BY_ID,
      variables: { id: params.id },
    });

    const c = data!.character;

    // 🔁 Normalization to REST format
    return {
      id: Number(c.id),
      name: c.name,
      status: c.status,
      species: c.species,
      type: c.type,
      gender: c.gender,
      origin: {
        name: c.origin.name,
        url: `${ENV.VITE_API_URL}/location/${encodeURIComponent(
          c.origin.name.replace(/\s/g, '_')
        )}`,
      },
      location: {
        name: c.location.name,
        url: `${ENV.VITE_API_URL}/location/${encodeURIComponent(
          c.location.name.replace(/\s/g, '_')
        )}`,
      },
      image: c.image,
      episode: c.episode.map((e) => `${ENV.VITE_API_URL}/episode/${e.id}`),
      url: `${ENV.VITE_API_URL}/character/${c.id}`,
      created: c.created,
    };
  } catch (error: any) {
    throw new Error(error.message || 'Erro ao buscar personagem por ID');
  }
}
