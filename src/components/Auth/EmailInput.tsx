import { useEffect, useState } from 'react';
import { Box, FlexBox } from '../UI/Boxes';
import { EmailIcon } from '../UI/Icons';
import { CommonInput } from '../UI/Inputs';
import Label from '../UI/Label';
import TextBox from '../UI/TextBox';
import { AuthInputProps } from './types';
import {
  emailCorrectAction,
  emailErrorAction,
  emailNullAction,
} from '../../core/reducer/authReducer';
import Button from '../UI/Button';
import React from 'react';

const emailRegex: RegExp = /\w+@[a-z]+.[a-z.]+/;

const EmailInput = ({
  dispatch,
  isError,
  errorMessage,
  isRegister,
}: AuthInputProps) => {
  const [inputData, setInputData] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputData.length === 0) dispatch(emailNullAction());
      else if (!emailRegex.test(inputData))
        dispatch(emailErrorAction(inputData, '잘못된 이메일 형식입니다'));
      else dispatch(emailCorrectAction(inputData));
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, inputData]);

  return (
    <Box $margin='0 0 42px 0'>
      <Label htmlFor='Email'>
        <EmailIcon $margin='0 5px 0 0' />
        이메일
      </Label>
      <FlexBox $justifyContents='space-between' $margin='6px 0 0 0'>
        <CommonInput
          type='text'
          name='Email'
          $padding={'0 10px 0 10px'}
          $width={isRegister ? '75%' : '100%'}
          $warning={isError}
          value={inputData || ''}
          onChange={(e) => {
            setInputData(e.target.value);
            if (!isRegister) dispatch(emailCorrectAction(e.target.value));
          }}
        />
        {isRegister && (
          <Button
            $fontSize={14}
            $borderRadius={20}
            $lineHeight={16}
            $width='auto'
            $padding='0 14px 0 14px'>
            인증하기
          </Button>
        )}
      </FlexBox>
      <TextBox
        $fontSize={14}
        $margin={'4px 10px 0 10px'}
        $warning={isError}
        $height='40px'>
        {errorMessage}
      </TextBox>
    </Box>
  );
};

export default React.memo(EmailInput);
