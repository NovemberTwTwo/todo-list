import styled from 'styled-components';
import { FontSizing } from './types/types';

const Label = styled.label<FontSizing>`
  display: block;
  color: ${(props) => props.theme.colors.fontSecondary};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 16)}px;
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : 20)}px;
`;

export default Label;
