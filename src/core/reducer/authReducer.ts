import { AuthData } from '../../components/Auth/types';

const EMAIL_NULL: string = 'EMAIL_NULL';
const EMAIL_ERROR: string = 'EMAIL_ERROR';
const EMAIL_CORRECT: string = 'EMAIL_CORRECT';
const PASSWORD_NULL: string = 'PASSWORD_NULL';
const PASSWORD_ERROR: string = 'PASSWORD_ERROR';
const PASSWORD_CORRECT: string = 'PASSWORD_CORRECT';

interface AuthAction {
  type: string;
  payload: string;
  message: string;
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

const authReducer = (state: AuthData, action: AuthAction): AuthData => {
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
          message: action.message,
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
          message: action.message,
        },
      };
    case PASSWORD_CORRECT:
      return {
        ...state,
        password: {
          data: action.payload,
          isValid: true,
          message: action.message,
        },
      };
    default:
      throw new Error();
  }
};

const emailNullAction = (): AuthAction => {
  return { type: EMAIL_NULL, payload: '', message: '' };
};

const emailErrorAction = (
  inputValue: string,
  errorMessage: string,
): AuthAction => {
  return { type: EMAIL_ERROR, payload: inputValue, message: errorMessage };
};

const emailCorrectAction = (inputValue: string): AuthAction => {
  return { type: EMAIL_CORRECT, payload: inputValue, message: '' };
};

const passwordNullAction = (): AuthAction => {
  return { type: PASSWORD_NULL, payload: '', message: '' };
};

const passwordErrorAction = (
  inputValue: string,
  errorMessage: string,
): AuthAction => {
  return { type: PASSWORD_ERROR, payload: inputValue, message: errorMessage };
};

const passwordCorrectAction = (
  inputValue: string,
  message: string = '',
): AuthAction => {
  return { type: PASSWORD_CORRECT, payload: inputValue, message };
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
export type { AuthAction };
