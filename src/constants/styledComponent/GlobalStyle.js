import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  :root {
    --caret-color: #8877E8;
    --color-gray: #8E9093;
    --color-historyPage: #FDFAFF;
    --color-message: #543FD3;
  }
`;

export default GlobalStyle;
