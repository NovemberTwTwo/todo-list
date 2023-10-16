import Card from '../UI/Card';
import TextBox from '../UI/TextBox';
import EmailInput from './EmailInput';
import { authInitialState, authReducer } from '../../core/reducer/authReducer';
import { useReducer, useRef, useState } from 'react';
import PasswordInput from './PasswordInput';
import Button from '../UI/Button';
import { FlexBox } from '../UI/Boxes';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../core/firebase/firebaseConfig';

const RegisterForm = () => {
  const [registerData, dispatch] = useReducer(authReducer, authInitialState);
  const [isChecked, setIsChecked] = useState<boolean | undefined>();
  const passwordRef = useRef<string>('');

  const setPasswordRef = (inputData: string) => {
    passwordRef.current = inputData;
  };

  const checkState = (isChecked: boolean | undefined): boolean => {
    if (isChecked === undefined || isChecked === true) return true;
    return false;
  };

  const firebaseRegister = async () => {
    await createUserWithEmailAndPassword(
      firebaseAuth,
      registerData.email.data,
      registerData.password.data,
    )
      .then((userCredential) => {})
      .catch((err) => {});
  };

  const registerSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const { email, password } = registerData;
    e.preventDefault();
    if (registerData.password.data !== passwordRef.current) {
      setIsChecked(false);
      return;
    }
    if (email.isValid && password.isValid) {
      setIsChecked(true);
      firebaseRegister();
    }
  };

  return (
    <Card $start={1} $end={7}>
      <TextBox $fontSize={28} $lineHeight={32} $margin={'0 0 42px 0'}>
        로그인
      </TextBox>
      <form onSubmit={registerSubmitHandler}>
        <EmailInput
          dispatch={dispatch}
          isError={
            !registerData.email.isValid &&
            registerData.email.message.length !== 0
          }
          isRegister={true}
          errorMessage={registerData.email.message}
        />
        <PasswordInput
          dispatch={dispatch}
          isError={
            !registerData.password.isValid &&
            registerData.password.message.length !== 0
          }
          isRegister={true}
          errorMessage={
            registerData.password.message ||
            '비밀번호는 최소 8자 이상. 영대소문자와 숫자, 특수문자를 각각 1개 이상 포함해야 합니다'
          }>
          비밀번호
        </PasswordInput>
        <PasswordInput
          dispatch={dispatch}
          isError={!checkState(isChecked)}
          isRegister={true}
          setPasswordRef={setPasswordRef}
          errorMessage={
            checkState(isChecked)
              ? '동일한 비밀번호를 입력해 주세요'
              : '동일한 비밀번호가 아닙니다'
          }>
          비밀번호 확인
        </PasswordInput>
        <FlexBox $justifyContents='center'>
          <Button
            type='submit'
            $fontSize={16}
            $lineHeight={24}
            $borderRadius={20}
            $width='35%'>
            회원가입하기
          </Button>
        </FlexBox>
      </form>
    </Card>
  );
};

export default RegisterForm;
