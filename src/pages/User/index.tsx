import { Container } from '@/components/Conteiner';
import { EpisodeCollapse } from '@/components/EpisodeCollapse';
import { useCharacter } from '@/hooks/useCharacter';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper,
  CharacterImage,
  EpisodesContainer,
  InfoContainer,
  InfoItem,
  Title,
} from './style';
import { useTranslation } from 'react-i18next';

export function UserPage() {
  const { t } = useTranslation();
  const navegate = useNavigate();
  const { currentCharacter, isLoading } = useCharacter();

  function handleBack() {
    navegate(-1);
  }
  if (isLoading) {
    return <div>{t('loading')}</div>;
  }
  return (
    <Container>
      <CardWrapper>
        <div>
          <GrFormPreviousLink
            onClick={handleBack}
            size={28}
            style={{ cursor: 'pointer', margin: '0.5rem' }}
          />
        </div>
        <Title>{currentCharacter?.name}</Title>

        <CharacterImage
          src={currentCharacter?.image}
          alt={currentCharacter?.name}
        />

        <InfoContainer>
          <InfoItem>
            <strong>{t('status')}:</strong> {currentCharacter?.status}
          </InfoItem>
          <InfoItem>
            <strong>{t('species')}:</strong> {currentCharacter?.species}
          </InfoItem>
          <InfoItem>
            <strong>{t('gender')}:</strong> {currentCharacter?.gender}
          </InfoItem>
          <InfoItem>
            <strong>{t('origin')}:</strong> {currentCharacter?.origin?.name}
          </InfoItem>
          <InfoItem>
            <strong>{t('location')}:</strong> {currentCharacter?.location?.name}
          </InfoItem>
        </InfoContainer>

        <hr />
        <EpisodesContainer>
          {currentCharacter?.episode.map((ep) => (
            <EpisodeCollapse key={ep} url={ep} />
          ))}
        </EpisodesContainer>
      </CardWrapper>
    </Container>
  );
}
