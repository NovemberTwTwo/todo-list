import Card from '../UI/Card';
import TextBox from '../UI/TextBox';
import EmailInput from './EmailInput';
import { authInitialState, authReducer } from './reducer/AuthReducer';
import { useReducer } from 'react';
import PasswordInput from './PasswordInput';
import Button from '../UI/Button';
import { FlexBox } from '../UI/Boxes';

const LoginForm = () => {
  const [loginData, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <Card $start={1} $end={7}>
      <TextBox $fontSize={28} $lineHeight={32} $margin={'0 0 42px 0'}>
        로그인
      </TextBox>
      <form action=''>
        <EmailInput
          dispatch={dispatch}
          isError={
            !loginData.email.isValid && loginData.email.message.length !== 0
          }
          errorMessage={loginData.email.message}
        />
        <PasswordInput
          dispatch={dispatch}
          isError={
            !loginData.password.isValid &&
            loginData.password.message.length !== 0
          }
          errorMessage={loginData.password.message}
        />
        <FlexBox $justifyContents='center'>
          <Button
            type='submit'
            $fontSize={16}
            $lineHeight={20}
            $borderRadius={20}
            $width='30%'>
            로그인하기
          </Button>
        </FlexBox>
      </form>
    </Card>
  );
};

export default LoginForm;
