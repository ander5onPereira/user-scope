import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 2px solid #00000010;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.primaryLight}`};
  &:focus {
    -webkit-box-shadow: ${({ theme }) => theme.shadow.sm};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
  &::placeholder {
    color: #00000040;
  }
`;
