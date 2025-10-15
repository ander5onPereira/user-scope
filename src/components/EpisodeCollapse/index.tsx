import { useTranslation } from 'react-i18next';
import { Collapse } from '../Collapse';
import { useEpisode } from './useEpisode';

interface EpisodeCollapseProps {
  url: string;
}

export function EpisodeCollapse({ url }: EpisodeCollapseProps) {
  const { data, isLoading, handletIsOpen } = useEpisode({ url });
  const { t } = useTranslation();
  return (
    <Collapse
      title={t('episodes', { episodes: url.split('/').pop() })}
      onOpenChange={handletIsOpen}
    >
      {isLoading && <p>{t('loading')}</p>}
      {data && (
        <>
          <p>
            <strong>{t('name')}:</strong> {data.name}
          </p>
          <p>
            <strong>{t('date')}:</strong> {data.air_date}
          </p>
          <p>
            <strong>{t('code')}:</strong> {data.episode}
          </p>
        </>
      )}
    </Collapse>
  );
}
