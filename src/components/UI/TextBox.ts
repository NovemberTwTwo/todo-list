import { styled } from 'styled-components';
import { BoxSizing, BoxSpacing, FontSizing } from './types/types';
import { spacing } from './mixin';

interface TextBoxProps extends BoxSizing, BoxSpacing, FontSizing {}

const TextBox = styled.p<TextBoxProps>`
  box-sizing: border-box;
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  min-height: ${(props) => (props.$lineHeight ? props.$lineHeight : 20)}px;

  ${spacing}

  font-size: calc(${(props) => (props.$fontSize ? props.$fontSize : 1)} * 1px);
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : 20)}px;

  color: ${(props) =>
    props.color ? props.color : props.theme.colors.fontMain};
`;

export default TextBox;
