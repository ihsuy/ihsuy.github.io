import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s ease;
  }

  a {
    color: ${({ theme }) => theme.text};
    transition: all 0.5s ease;
  }

  a.link {
    color: ${({ theme }) => theme.link};
    transition: all 0.5s ease;
  }
  a.link:hover {
    color: ${({ theme }) => theme.linkHover};
    transition: all 0.5s ease;
  }

  span.copyright {
      color: white;
      font-weight: bold;
  }

  div.margin {
    background: ${({ theme }) => theme.marginColor};
    text-align: center;
    font-size: 12px;
    transition: all 0.5s ease;
  }

  h2 {
    padding: 0.25em 0.5em;
    border-left: solid 5px ${({ theme }) => theme.borderLeft};
    transition: all 0.5s ease;
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
