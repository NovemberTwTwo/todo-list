import styled from 'styled-components';
import { BoxSizing, BoxSpacing } from './types/types';
import { spacing } from './mixin';

interface BoxProps extends BoxSizing, BoxSpacing {}

const Box = styled.div<BoxProps>`
  display: block;
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  height: ${(props) => (props.$height ? props.$height : 'auto')};

  ${spacing}
`;

export { Box };
