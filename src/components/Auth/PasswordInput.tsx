import { useEffect, useState } from 'react';
import { Box, FlexBox } from '../UI/Boxes';
import { KeyIcon } from '../UI/Icons';
import { CommonInput } from '../UI/Inputs';
import Label from '../UI/Label';
import TextBox from '../UI/TextBox';
import { AuthInputProps } from './types';
import {
  passwordCorrectAction,
  passwordErrorAction,
  passwordNullAction,
} from '../../core/reducer/authReducer';
import React from 'react';

const passwordRegex: RegExp =
  /^.*(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\[\]\{\}\/\(\)\.\?\<\,\>\!\@\#\$\%\^\&]).*$/;

const PasswordInput = ({
  dispatch,
  isError,
  errorMessage,
  isRegister,
  setPasswordRef,
  children,
}: AuthInputProps) => {
  const [inputData, setInputData] = useState<string>('');

  useEffect(() => {
    if (!setPasswordRef && isRegister) {
      const timer = setTimeout(() => {
        if (inputData.length === 0) dispatch(passwordNullAction());
        else if (inputData.length < 8)
          dispatch(
            passwordErrorAction(
              inputData,
              '비밀번호는 최소 8자 이상이여야 합니다',
            ),
          );
        else if (!passwordRegex.test(inputData))
          dispatch(
            passwordErrorAction(
              inputData,
              '비밀번호는 최소 1개 이상의 영어 대문자, 소문자 그리고 숫자와 특수문자를 포함하여야 합니다',
            ),
          );
        else
          dispatch(
            passwordCorrectAction(inputData, '올바른 비밀번호 형식입니다'),
          );
      }, 300);
      return () => clearTimeout(timer);
    } else if (setPasswordRef) {
      setPasswordRef(inputData);
    }
  }, [dispatch, inputData, isRegister, setPasswordRef]);

  return (
    <Box $margin='0 0 42px 0'>
      <Label htmlFor='Email'>
        <KeyIcon $margin='0 5px 0 0' />
        {children}
      </Label>
      <FlexBox $justifyContents='space-between'>
        <CommonInput
          type='password'
          name='Email'
          $margin='6px 0 0 0'
          $padding={'0 10px 0 10px'}
          $width='100%'
          $warning={isError}
          value={inputData || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputData(e.target.value);
            if (!isRegister) dispatch(passwordCorrectAction(e.target.value));
          }}
        />
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

export default React.memo(PasswordInput);
