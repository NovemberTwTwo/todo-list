import { AuthData } from '../types';

const EMAIL_NULL: string = 'EMAIL_NULL';
const EMAIL_ERROR: string = 'EMAIL_ERROR';
const EMAIL_CORRECT: string = 'EMAIL_CORRECT';
const PASSWORD_NULL: string = 'PASSWORD_NULL';
const PASSWORD_ERROR: string = 'PASSWORD_ERROR';
const PASSWORD_CORRECT: string = 'PASSWORD_CORRECT';

interface ActionType {
  type: string;
  payload: string;
  error: string;
}

const authInitialState: AuthData = {
  email: {
    data: '',
    isValid: false,
    message: '',
  },
  password: {
    data: '',
    isValid: false,
    message: '',
  },
};

const authReducer = (state: AuthData, action: ActionType): AuthData => {
  switch (action.type) {
    case EMAIL_NULL:
      return {
        ...state,
        email: {
          data: '',
          isValid: false,
          message: '',
        },
      };
    case EMAIL_ERROR:
      return {
        ...state,
        email: {
          data: action.payload,
          isValid: false,
          message: action.error,
        },
      };
    case EMAIL_CORRECT:
      return {
        ...state,
        email: {
          data: action.payload,
          isValid: true,
          message: '',
        },
      };
    case PASSWORD_NULL:
      return {
        ...state,
        password: {
          data: '',
          isValid: false,
          message: '',
        },
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        password: {
          data: '',
          isValid: false,
          message: action.error,
        },
      };
    case PASSWORD_CORRECT:
      return {
        ...state,
        password: {
          data: action.payload,
          isValid: true,
          message: '올바른 비밀번호 형식입니다',
        },
      };
    default:
      throw new Error();
  }
};

const emailNullAction = (): ActionType => {
  return { type: EMAIL_NULL, payload: '', error: '' };
};

const emailErrorAction = (
  inputValue: string,
  errorMessage: string,
): ActionType => {
  return { type: EMAIL_ERROR, payload: inputValue, error: errorMessage };
};

const emailCorrectAction = (inputValue: string): ActionType => {
  return { type: EMAIL_CORRECT, payload: inputValue, error: '' };
};

const passwordNullAction = (): ActionType => {
  return { type: PASSWORD_NULL, payload: '', error: '' };
};

const passwordErrorAction = (
  inputValue: string,
  errorMessage: string,
): ActionType => {
  return { type: PASSWORD_ERROR, payload: inputValue, error: errorMessage };
};

const passwordCorrectAction = (inputValue: string): ActionType => {
  return { type: PASSWORD_CORRECT, payload: inputValue, error: '' };
};

export {
  authInitialState,
  authReducer,
  emailNullAction,
  emailErrorAction,
  emailCorrectAction,
  passwordNullAction,
  passwordErrorAction,
  passwordCorrectAction,
};
export type { ActionType };
