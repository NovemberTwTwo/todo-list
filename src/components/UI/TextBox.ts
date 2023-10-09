import { styled } from 'styled-components';

const TextBox = styled.p<{
  size?: number;
  color?: string;
  weight?: number;
  $marginTop?: number;
  $marginBottom?: number;
  $marginLeft?: number;
  $marginRight?: number;
  $lineHeight?: number;
  width?: string;
}>`
  box-sizing: border-box;
  width: calc(${(props) => (props.width ? props.width : 'auto')});
  min-height: calc(
    ${(props) => (props.$lineHeight ? props.$lineHeight : 20)} * 1px
  );
  margin-left: calc(
    ${(props) => (props.$marginLeft ? props.$marginLeft : 0)} * 1px
  );
  margin-right: calc(
    ${(props) => (props.$marginRight ? props.$marginRight : 0)} * 1px
  );
  margin-top: calc(
    ${(props) => (props.$marginTop ? props.$marginTop : 0)} * 1px
  );
  margin-bottom: calc(
    ${(props) => (props.$marginBottom ? props.$marginBottom : 0)} * 1px
  );
  font-size: calc(${(props) => (props.size ? props.size : 1)} * 1px);
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  line-height: calc(
    ${(props) => (props.$lineHeight ? props.$lineHeight : 20)} * 1px
  );
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.fontMain};
`;

export default TextBox;
