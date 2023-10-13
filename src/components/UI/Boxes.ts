import styled from 'styled-components';
import { BoxSizing, BoxSpacing } from './types/types';
import { spacing } from './mixin';

interface BoxProps extends BoxSizing, BoxSpacing {}

const Box = styled.div<BoxProps>`
  display: block;
  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $height }) => ($height ? $height : 'auto')};

  ${spacing}
`;

export { Box };
