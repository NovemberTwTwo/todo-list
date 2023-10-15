import Card from '../UI/Card';
import TextBox from '../UI/TextBox';
import { TextInput } from '../UI/Inputs';
import Label from '../UI/Label';
import { Box } from '../UI/Boxes';
import { KeyIcon } from '../UI/Icons';
import EmailInput from './EmailInput';
import { authInitialState, authReducer } from './reducer/AuthReducer';
import { useReducer } from 'react';

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
        <Box $margin='0 0 42px 0'>
          <Label htmlFor=''>
            <KeyIcon $margin='0 5px 0 0' />
            비밀번호
          </Label>
          <TextInput
            type='password'
            name=''
            id=''
            $margin='6px 0 0 0'
            $padding={'0 10px 0 10px'}
            $width='80%'
          />
        </Box>
        <button type='submit'>로그인하기</button>
      </form>
    </Card>
  );
};

export default LoginForm;
