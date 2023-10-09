import { styled } from 'styled-components';

const TextBox = styled.p<{
  size?: number;
  color?: string;
  weight?: number;
  marginTop?: number;
  marginBottom?: number;
}>`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  font-size: calc(${(props) => (props.size ? props.size : 1)} * 1px);
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.fontMain};
`;

export default TextBox;
