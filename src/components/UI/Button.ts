import styled, { css } from 'styled-components';
import { spacing } from './mixin';
import { BoxSizing, BoxSpacing, FontSizing } from './types/types';

interface ButtonProps extends BoxSizing, BoxSpacing, FontSizing {
  $backgroundColor?: string;
  $borderColor?: string;
  $borderRadius?: number;
  $fontColor?: string;
}

const Button = styled.button<ButtonProps>`
  width: ${({ $width }) => ($width ? $width : '84px')};
  height: ${({ $height }) => ($height ? $height : 'auto')};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : props.theme.colors.brand};
  color: ${(props) =>
    props.$fontColor ? props.$fontColor : props.theme.colors.main};
  font-family: 'Pretendard';
  border: 0;

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
  
  ${({ $fontSize }) =>
    $fontSize &&
    css`
      font-size: ${$fontSize}px;
    `}

  ${({ $lineHeight }) =>
    $lineHeight &&
    css`
      line-height: ${$lineHeight}px;
    `}

  ${({ $fontWeight }) =>
    $fontWeight &&
    css`
      font-weight: ${$fontWeight};
    `}

  ${spacing}
`;

export default Button;
