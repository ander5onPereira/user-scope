import { Collapse } from '../Collapse';
import { useEpisode } from './useEpisode';

interface EpisodeCollapseProps {
  url: string;
}

export function EpisodeCollapse({ url }: EpisodeCollapseProps) {
  const { data, isLoading, handletIsOpen } = useEpisode({ url });
  return (
    <Collapse
      title={`Episódio ${url.split('/').pop()}`}
      onOpenChange={handletIsOpen}
    >
      {isLoading && <p>Carregando...</p>}
      {data && (
        <>
          <p>
            <strong>Nome:</strong> {data.name}
          </p>
          <p>
            <strong>Data:</strong> {data.air_date}
          </p>
          <p>
            <strong>Código:</strong> {data.episode}
          </p>
        </>
      )}
    </Collapse>
  );
}
