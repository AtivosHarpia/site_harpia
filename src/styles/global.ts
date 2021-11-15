import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    outline: 0;
    text-decoration: none;
    list-style: none;

    
  }

  :root {
    --dark-green: #254330;
    --green: #508A16;
    --text-white: #FFFFFF;
  }

  body {
    background: var(--dark-green);
    background-image: url('../../amazonia5.jpg');
    background-size: cover;
    background-repeat: no-repeat;


    @media screen and (max-width: 768px) {
      background-image: url('../../amazonia5.jpg');
      background-size: cover;
      background-position: left;
    }
  }
  
  h3 {
    color: var(----text-white);
    font-size: 1.75rem;
  }
  h4 {
    color: var(----text-white);
    font-size: 1.25rem;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }
  
  button {
    cursor: pointer;
    border: none;
  }
 
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%large;
    }
  }
`;
