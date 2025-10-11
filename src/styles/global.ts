import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  button {
    cursor: pointer;
    border: none;
  }
  ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background-color: #c6c6c6;
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #909090;
}
::-webkit-scrollbar-thumb:active {
  background-color: #606060;
}
`;
