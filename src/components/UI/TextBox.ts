import { styled } from 'styled-components';
import { BoxSizing, BoxSpacing, FontSizing } from './PropType/PropTypes';

interface TextBoxProps extends BoxSizing, BoxSpacing, FontSizing {}

const TextBox = styled.p<TextBoxProps>`
  box-sizing: border-box;
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  min-height: ${(props) => (props.$lineHeight ? props.$lineHeight : 20)}px;

  margin: ${(props) => (props.$margin ? props.$margin : '0 0 0 0')};
  padding: ${(props) => (props.$padding ? props.$padding : '0 0 0 0')};

  font-size: calc(${(props) => (props.$fontSize ? props.$fontSize : 1)} * 1px);
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : 20)}px;

  color: ${(props) =>
    props.color ? props.color : props.theme.colors.fontMain};
`;

export default TextBox;
