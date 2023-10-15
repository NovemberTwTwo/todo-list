import { useEffect, useState } from 'react';
import { Box, FlexBox } from '../UI/Boxes';
import Button from '../UI/Button';
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

const emailRegex: RegExp = /\w+@[a-z]+.[a-z.]+/;

const EmailInput = ({ dispatch, isError, errorMessage }: AuthInputProps) => {
  const [inputData, setInputData] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputData.length === 0) dispatch(emailNullAction());
      else if (!emailRegex.test(inputData))
        dispatch(emailErrorAction('잘못된 이메일 형식입니다.'));
      else dispatch(emailCorrectAction(inputData));
    }, 300);
    return () => clearTimeout(timer);
  }, [dispatch, inputData]);

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
        <Button>인증하기</Button>
      </FlexBox>

      <TextBox $fontSize={14} $margin={'4px 10px 0 10px'} $warning={isError}>
        {errorMessage}
      </TextBox>
    </Box>
  );
};

export default EmailInput;
