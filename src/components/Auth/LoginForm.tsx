import Card from '../UI/Card';
import TextBox from '../UI/TextBox';
import EmailInput from './EmailInput';
import {
  authInitialState,
  authReducer,
  emailErrorAction,
  passwordErrorAction,
} from '../../core/reducer/authReducer';
import { useEffect, useReducer, useState } from 'react';
import PasswordInput from './PasswordInput';
import Button from '../UI/Button';
import { FlexBox } from '../UI/Boxes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../core/firebase/firebaseConfig';
import useRouterDispatch from '../../hooks/useRouterDispatch';
import { routeAction } from '../../core/reducer/routeReducer';

const LoginForm = () => {
  const [loginData, dispatch] = useReducer(authReducer, authInitialState);
  const [authErrorMessage, setAuthErrorMessage] = useState<string>('');
  const routeDispatch = useRouterDispatch();

  useEffect(() => {
    setAuthErrorMessage('');
  }, [loginData]);

  const firebaseLogin = async () => {
    signInWithEmailAndPassword(
      firebaseAuth,
      loginData.email.data,
      loginData.password.data,
    )
      .then((userCredential) => {
        routeDispatch(routeAction('/register'));
      })
      .catch(({ code }) => {
        if (code === 'auth/invalid-login-credentials')
          setAuthErrorMessage('잘못된 비밀번호 혹은 존재하지 않는 계정입니다.');
      });
  };

  const loginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const { email, password } = loginData;
    e.preventDefault();
    if (email.isValid && password.isValid) {
      firebaseLogin();
      return;
    }
    !email.isValid &&
      dispatch(emailErrorAction(email.data, '이메일을 입력해 주세요'));
    !password.isValid &&
      dispatch(passwordErrorAction(password.data, '비밀번호를 입력해 주세요'));
  };

  return (
    <Card $start={1} $end={7}>
      <TextBox $fontSize={28} $lineHeight={32} $margin={'0 0 42px 0'}>
        로그인
      </TextBox>
      <form onSubmit={loginSubmitHandler}>
        <EmailInput
          dispatch={dispatch}
          isError={
            (!loginData.email.isValid &&
              loginData.email.message.length !== 0) ||
            authErrorMessage !== ''
          }
          errorMessage={loginData.email.message}
        />
        <PasswordInput
          dispatch={dispatch}
          isError={
            (!loginData.password.isValid &&
              loginData.password.message.length !== 0) ||
            authErrorMessage !== ''
          }
          errorMessage={loginData.password.message}>
          비밀번호
        </PasswordInput>
        <TextBox
          $fontSize={14}
          $margin={'4px 10px 0 10px'}
          $warning={true}
          $height='20px'>
          {authErrorMessage}
        </TextBox>
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
