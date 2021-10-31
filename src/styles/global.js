import { createGlobalStyle } from 'styled-components';
import {COLORS} from './colors';

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

  .main-background{
    background: ${COLORS.light1};
  }

  .primary-background{
    background: ${COLORS.primary};
  }

  .second-background{
    background: ${COLORS.light0};
  }

  .primary-text{
    color: ${COLORS.primary};
  }

  .secondary-text{
    color: ${COLORS.secondary};
  }

  .success-text{
    color: ${COLORS.success};
  }

  .danger-text{
    color: ${COLORS.danger};
  }

  .main-text{
    color: ${COLORS.gray0};
    svg{
      color: ${COLORS.gray0};
    }
  }

  .nightMode{
    .main-background{
      background: ${COLORS.dark0};
    }
    .second-background{
      background: ${COLORS.dark1};
    }
    .main-text{
      color: ${COLORS.light0};
      svg{
        color: ${COLORS.light0};
      }
    }
  }

 

`;