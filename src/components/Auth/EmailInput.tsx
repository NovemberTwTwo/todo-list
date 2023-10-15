import { useEffect, useState } from 'react';
import { Box, FlexBox } from '../UI/Boxes';
import { EmailIcon } from '../UI/Icons';
import { TextInput } from '../UI/Inputs';
import Label from '../UI/Label';
import TextBox from '../UI/TextBox';
import { AuthInputProps } from './types';
import {
  emailCorrectAction,
  emailErrorAction,
  emailNullAction,
} from './reducer/AuthReducer';
import Button from '../UI/Button';

const emailRegex: RegExp = /\w+@[a-z]+.[a-z.]+/;

const EmailInput = ({
  dispatch,
  isError,
  errorMessage,
  isRegister,
}: AuthInputProps) => {
  const [inputData, setInputData] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (isRegister) {
          if (inputData.length === 0) dispatch(emailNullAction());
          else if (!emailRegex.test(inputData))
            dispatch(emailErrorAction('잘못된 이메일 형식입니다.'));
          return;
        }
        dispatch(emailCorrectAction(inputData));
      },
      isRegister ? 300 : 0,
    );
    return () => clearTimeout(timer);
  }, [dispatch, inputData, isRegister]);

  return (
    <Box $margin='0 0 42px 0'>
      <Label htmlFor='Email'>
        <EmailIcon $margin='0 5px 0 0' />
        이메일
      </Label>
      <FlexBox $justifyContents='space-between'>
        <TextInput
          type='text'
          name='Email'
          $margin='6px 0 0 0'
          $padding={'0 10px 0 10px'}
          $width='80%'
          $warning={isError}
          value={inputData || ''}
          onChange={(e) => setInputData(e.target.value)}
        />
        {isRegister && <Button>인증하기</Button>}
      </FlexBox>
      <TextBox $fontSize={14} $margin={'4px 10px 0 10px'} $warning={isError}>
        {errorMessage}
      </TextBox>
    </Box>
  );
};

export default EmailInput;
