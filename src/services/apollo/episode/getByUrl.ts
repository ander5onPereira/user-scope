import type { IEpisode } from '@/models/episode';
import { client } from '@/services/apollo/apolloClient';
import { handleApiError } from '@/services/axios/error';
import { GET_EPISODE_BY_ID } from './queryGetByUrl';
import { ENV } from '@/utils/env';

interface ParamsGet {
  url: string;
}

interface GetEpisodeData {
  episode: {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: Array<{
      id: string;
      name: string;
      image: string;
    }>;
    created: string;
  } | null;
}

export async function getUrlApollo(params?: ParamsGet): Promise<IEpisode> {
  try {
    if (!params) throw handleApiError({ message: 'Params is required' });

    const idMatch = params.url.match(/\/episode\/(\d+)/);
    if (!idMatch) throw handleApiError({ message: 'Invalid episode URL' });

    const id = idMatch[1];

    const { data } = await client.query<GetEpisodeData>({
      query: GET_EPISODE_BY_ID,
      variables: { id },
      fetchPolicy: 'no-cache',
    });

    if (!data?.episode) throw handleApiError({ message: 'Episode not found' });

    const baseCharacterUrl = `${ENV.VITE_API_URL}/character`;
    const baseEpisodeUrl = `${ENV.VITE_API_URL}/episode`;

    // 🔁 Normalization to REST format
    return {
      id: Number(data.episode.id),
      name: data.episode.name,
      air_date: data.episode.air_date,
      episode: data.episode.episode,
      characters: data.episode.characters.map(
        (char) => `${baseCharacterUrl}/${char.id}`
      ),
      url: `${baseEpisodeUrl}/${data.episode.id}`,
      created: data.episode.created,
    };
  } catch (error) {
    throw handleApiError(error);
  }
}
