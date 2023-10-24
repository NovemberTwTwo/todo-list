import { css, styled } from 'styled-components';
import { BoxSizing, BoxSpacing, FontSizing } from './types/types';
import { spacing } from './mixin';

interface TextBoxProps extends BoxSizing, BoxSpacing, FontSizing {
  $warning?: boolean;
  $color?: string;
  $alignCenter?: boolean;
}

const TextBox = styled.p<TextBoxProps>`
  box-sizing: border-box;
  width: ${({ $width }) => ($width ? $width : 'auto')};
  height: ${({ $height }) => ($height ? $height : 'auto')};
  min-height: ${({ $lineHeight }) => ($lineHeight ? $lineHeight : 20)}px;

  ${({ $alignCenter }) =>
    $alignCenter &&
    css`
      display: flex;
      align-items: center;
    `}

  ${spacing}

  font-size: calc(${({ $fontSize }) => ($fontSize ? $fontSize : 1)} * 1px);
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 400)};
  line-height: ${({ $lineHeight }) => ($lineHeight ? $lineHeight : 20)}px;

  color: ${(props) =>
    props.color ? props.color : props.theme.colors.fontMain};

  ${(props) =>
    props.$warning &&
    css`
      color: ${(props) => props.theme.colors.warning} !important;
    `}
`;

export default TextBox;
