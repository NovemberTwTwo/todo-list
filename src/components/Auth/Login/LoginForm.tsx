import Card from '../../UI/Card';
import TextBox from '../../UI/TextBox';
import { TextInput } from '../../UI/Inputs';
import Label from '../../UI/Label';
import { Box } from '../../UI/Boxes';
import { KeyIcon, UserIcon } from '../../UI/Icons';
import IdentityInput from './../IdentityInput';
import { useState } from 'react';

interface LoginData {
  userId: string;
  password: string;
}

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    userId: '',
    password: '',
  });

  return (
    <Card $start={1} $end={7}>
      <TextBox $fontSize={28} $lineHeight={32} $margin={'0 0 42px 0'}>
        로그인
      </TextBox>
      <form action=''>
        <IdentityInput isRegister={true} onChange={setLoginData} />
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
      </form>
    </Card>
  );
};

export default LoginForm;
