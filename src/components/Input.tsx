import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 2px solid #00000010;
  border-bottom: 2px solid #000;
  &:focus {
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    color: #00000040;
  }
`;
