import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #fff;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Roboto, sans-serif;
  }
`;
export default GlobalStyle;