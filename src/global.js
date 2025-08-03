import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: #ffffff;
    color: #2c3e50;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .App {
    width: 100%;
    min-height: 100vh;
  }

  a {
    color: #667eea;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #764ba2;
    text-decoration: none;
  }

  span.copyright {
    color: #6c757d;
    font-weight: 400;
    font-size: 0.9rem;
  }

  div.margin {
    background: #f8f9fa;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
  }

  p {
    margin: 0;
  }

  /* Smooth scrolling for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
  
`;

// body {
//     // align-items: center;
//     background: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
//     // display: flex;
//     // flex-direction: column;
//     // justify-content: center;
//     // height: 100vh;
//     // margin: 0;
//     // padding: 0;
//     // font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//     transition: all 0.25s linear;
//   }
