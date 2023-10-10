import Card from '../../UI/Card';
import TextBox from './../../UI/TextBox';
import { styled } from 'styled-components';

const LoginForm = () => {
  return (
    <Card start={1} end={7}>
      <TextBox size={28} $lineHeight={32} $marginBottom={42}>
        로그인
      </TextBox>
      <form action=''>
        <InputBox width='100%'>
          <InputLabel htmlFor=''>아이디 </InputLabel>
          <TextInput type='text' name='' id='' />
          <TextBox size={14} $marginLeft={10} $marginRight={10} $marginTop={4}>
            잘못된 비밀번호입니다
          </TextBox>
        </InputBox>
        <InputBox width='100%'>
          <InputLabel htmlFor=''>비밀번호 </InputLabel>
          <TextInput type='password' name='' id='' />
        </InputBox>
      </form>
    </Card>
  );
};

const InputLabel = styled.label<{ size?: number }>`
  display: block;
  color: ${(props) => props.theme.colors.fontSecondary};
  font-size: calc(${(props) => (props.size ? props.size : 16)} * 1px);
  line-height: 20px;
`;

const TextInput = styled.input`
  background-color: transparent !important;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.third};
  padding-left: 10px;
  padding-right: 10px;
  width: calc(100% - 22px);
  height: 28px;
  margin-top: 8px;

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

const InputBox = styled.div<{ width?: string }>`
  width: calc(${(props) => (props.width ? props.width : '100%')});
  margin-bottom: 42px;
`;

export default LoginForm;
