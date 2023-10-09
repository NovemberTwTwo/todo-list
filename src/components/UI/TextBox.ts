import { styled } from 'styled-components';

const TextBox = styled.p<{ size?: number; color?: string }>`
  font-size: '${(props) => (props.size ? props.size : 1)}rem';
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.fontMain};
`;

export default TextBox;
