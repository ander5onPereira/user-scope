import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 600px;
  width: 90%;
  margin: 1rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 96vh;
  overflow: hidden;
`;

export const Title = styled.h1`
  text-align: center;
  padding-bottom: 1rem;
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: contain;
  display: block;
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  & strong {
    min-width: 80px;
  }
`;

export const EpisodesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 1rem 1rem 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 4px;
  }
`;
