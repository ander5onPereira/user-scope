import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  border: none;
  -webkit-box-shadow: ${({ theme }) => theme.card.shadow};
  box-shadow: ${({ theme }) => theme.card.shadow};
`;
