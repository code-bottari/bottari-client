import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  :root {
    --caret-color: #8877E8;
    --color-gray: #8E9093;
    --color-notification-tap: #FDFAFF;
    --color-subscribed-tap: #F9F7F7;
    --color-message: #543FD3;
  }
`;

export default GlobalStyle;
