import { createGlobalStyle } from 'styled-components';
import { scrollBar } from '../mixins/_mixins';
import { helveticaFont } from '@/resources';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    font-family: ${helveticaFont.style.fontFamily} !important;
  }

  body {
    width: 100% !important;
    overflow-y: auto !important;
    ${scrollBar({})}
  }

  #app-container {
    position: relative;
  }
`;
