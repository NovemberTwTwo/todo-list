import styled from 'styled-components';
import { BoxSizing, BoxSpacing } from './types/types';
import { spacing } from './mixin';

interface TextInputProps extends BoxSizing, BoxSpacing {}

const TextInput = styled.input<TextInputProps>`
  background-color: transparent !important;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.third};
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  height: ${(props) => (props.$height ? props.$height : '28px')};
  box-sizing: border-box;

  ${spacing}

  &:focus {
    outline-color: ${(props) => props.theme.colors.brandSecondary};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:autofill,
  &:autofill:hover,
  &:autofill:focus,
  &:autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export { TextInput };
