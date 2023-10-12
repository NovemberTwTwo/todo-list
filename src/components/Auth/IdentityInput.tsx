import { useEffect, useState } from 'react';
import { Box } from '../UI/Boxes';
import { UserIcon } from '../UI/Icons';
import { TextInput } from '../UI/Inputs';
import Label from '../UI/Label';
import TextBox from '../UI/TextBox';

interface LoginData {
  userId: string;
  password: string;
}

interface DefaultProps {
  onChange: React.Dispatch<React.SetStateAction<LoginData>>;
}

interface IdentityInputProps extends DefaultProps {
  isRegister: boolean;
}

interface InputValidation {
  error: boolean;
  message: string;
}

const IdentityInput = ({ isRegister, onChange }: IdentityInputProps) => {
  if (isRegister) {
    return <RegisterInput onChange={onChange} />;
  }
  return <LoginInput />;
};

const RegisterInput = ({ onChange }: DefaultProps) => {
  const [userId, setUserId] = useState<string>('');
  const [validation, setValidation] = useState<InputValidation>({
    error: false,
    message: '아이디를 입력해주세요',
  });
  const regex: RegExp = /^[a-zA-Z0-9]{4,24}$/;

  useEffect(() => {
    const timer = setTimeout(() => {
      !regex.test(userId) &&
        setValidation({
          error: true,
          message: '영문 대소문자 및 숫자로 4-24자의 길이를 가져야 합니다.',
        });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  });

  const userIdChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    if (!validation.error)
      setValidation((prev) => ({
        ...prev,
        message: userId.length === 0 ? '아이디를 입력해주세요' : '',
      }));
  };

  return (
    <Box $margin='0 0 42px 0'>
      <Label htmlFor='identity'>
        <UserIcon $margin='0 5px 0 0' />
        아이디
      </Label>
      <TextInput
        type='text'
        name='identity'
        $margin='6px 0 0 0'
        $padding={'0 10px 0 10px'}
        $width='80%'
        $warning={validation.error}
        onChange={userIdChangeHandler}
      />
      <TextBox
        $fontSize={14}
        $margin={'4px 10px 0 10px'}
        $warning={validation.error}>
        {validation.message}
      </TextBox>
    </Box>
  );
};

const LoginInput = () => {
  return (
    <Box $margin='0 0 42px 0'>
      <Label htmlFor='identity'>
        <UserIcon $margin='0 5px 0 0' />
        아이디
      </Label>
      <TextInput
        type='text'
        name='identity'
        $margin='6px 0 0 0'
        $padding={'0 10px 0 10px'}
        $width='80%'
      />
      <TextBox $fontSize={14} $margin={'4px 10px 0 10px'}>
        잘못된 비밀번호입니다
      </TextBox>
    </Box>
  );
};

export default IdentityInput;
