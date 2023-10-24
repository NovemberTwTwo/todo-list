import styled from 'styled-components';
import { BoxSizing, BoxSpacing } from './types/types';
import { spacing } from './mixin';

interface BoxProps extends BoxSizing, BoxSpacing {}
interface FlexBoxProps extends BoxProps {
  $justifyContents?: string;
}

const Box = styled.div<BoxProps>`
  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $height }) => ($height ? $height : 'auto')};

  ${spacing}
`;

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${({ $justifyContents }) =>
    $justifyContents ? $justifyContents : 'start'};
  align-items: end;
  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $height }) => ($height ? $height : 'auto')};

  ${spacing}
`;

export { Box, FlexBox };
