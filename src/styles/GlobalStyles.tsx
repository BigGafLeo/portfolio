import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Resetowanie domyślnych stylów */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Ustawienia globalne */
  html, body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background.base};
    background: ${({ theme }) => theme.palette.peachSky6};
    color: ${({ theme }) => theme.colors.text.default};
    min-height: 100vh;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  /* Stylowanie linków */
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.palette.skyDancer};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.palette.chilly};
  }

  /* Nagłówki */
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.heading};
    line-height: 1.2;
  }

  /* Przycisk */
  button {
    border-radius: ${({ theme }) => theme.borderRadiuses.m};
    border: none;
    padding: ${({ theme }) => theme.spacing.medium};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 500;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.text.default};
    cursor: pointer;
  }


`;

export default GlobalStyle;
