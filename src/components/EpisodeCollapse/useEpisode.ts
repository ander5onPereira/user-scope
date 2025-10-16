import type { IEpisode } from '@/models/episode';
// import { getUrl } from '@/services/requests/episode/get'; // Request API Rest
import { getUrlApollo } from '@/services/apollo/episode/getByUrl'; // Request API graphql
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface EpisodeProps {
  url: string;
}
export function useEpisode({ url }: EpisodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useQuery<IEpisode>({
    queryKey: ['episode', url],
    // queryFn: () => getUrl({ url }), // Request API Rest
    queryFn: () => getUrlApollo({ url }), // Request API graphql
    staleTime: 60 * 1000,
    enabled: !!url && isOpen,
  });

  function handletIsOpen(value: boolean) {
    setIsOpen(value);
  }

  return {
    data,
    isLoading,
    handletIsOpen,
  };
}
