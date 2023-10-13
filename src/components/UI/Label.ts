import styled from 'styled-components';
import { FontSizing } from './types/types';

const Label = styled.label<FontSizing>`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.fontSecondary};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : 16)}px;
  line-height: ${({ $lineHeight }) => ($lineHeight ? $lineHeight : 20)}px;
`;

export default Label;
