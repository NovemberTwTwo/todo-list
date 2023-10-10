import styled from 'styled-components';
import { BoxSizing, BoxSpacing } from './PropType/PropTypes';

interface BoxProps extends BoxSizing, BoxSpacing {}

const Box = styled.div<BoxProps>`
  display: block;
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  height: ${(props) => (props.$height ? props.$height : 'auto')};
  margin: ${(props) => (props.$margin ? props.$margin : '0 0 0 0')};
  padding: ${(props) => (props.$padding ? props.$padding : '0 0 0 0')};
`;

export { Box };
