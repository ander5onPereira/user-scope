import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  gap: 1rem;
  background: linear-gradient(135deg, #dbeafe, #93c5fd);

  @media (max-width: 768px) {
    background: linear-gradient(135deg, #bfdbfe, #60a5fa);
  }
`;
