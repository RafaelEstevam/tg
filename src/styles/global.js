import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 16px;
    // opacity: ${(props) => 1 - ((props.theme.brightness / 100) * 2)}; /*brilho*/
    filter: brightness(${(props) => 1 + ((props.theme.brightness / 100))}) contrast(${(props) => 1 + ((props.theme.contrast / 100))});
  }

  html{
    font-size: ${(props) => 1 + ((props.theme.fontSize / 10) * 2)}rem;
    height: 100vh;
    body, #root{
      height: 100vh;
    }
  }

  .nightMode{
    background: #2f2f38;
  }

`;