import { createGlobalStyle } from 'styled-components';
import fonts from './font-mixin';

const GlobalStyle = createGlobalStyle`
  ${fonts}
`;

export default GlobalStyle;
