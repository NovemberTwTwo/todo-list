import styled, { css } from 'styled-components';
import { BoxDesign, BoxSizing, BoxSpacing } from './types/types';
import { spacing } from './mixin';

interface BoxProps extends BoxSizing, BoxSpacing, BoxDesign {}
interface FlexBoxProps extends BoxProps {
  $justifyContents?: string;
  $alignItems?: string;
}

const Box = styled.div<BoxProps>`
  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $height }) => ($height ? $height : 'auto')};

  ${spacing}

  ${({ $borderColor }) =>
    $borderColor &&
    css`
      border: solid 1px ${$borderColor};
    `}

  ${({ $borderRadius }) =>
    $borderRadius &&
    css`
      border-radius: ${$borderRadius}px;
    `}

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      border-radius: ${$backgroundColor}px;
    `}
`;

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${({ $justifyContents }) =>
    $justifyContents ? $justifyContents : 'start'};
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'end')};
  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $height }) => ($height ? $height : 'auto')};

  ${spacing}
`;

export { Box, FlexBox };
