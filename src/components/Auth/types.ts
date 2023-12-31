import { AuthAction } from '../../core/reducer/authReducer';

interface AuthData {
  email: AuthInputData;
  password: AuthInputData;
}

interface AuthInputData {
  data: string;
  isValid: boolean;
  message: string;
}

interface AuthInputProps {
  isRegister?: boolean;
  dispatch: React.Dispatch<AuthAction>;
  isError: boolean;
  errorMessage: string;
  children?: React.ReactNode;
  setPasswordRef?: (inputData: string) => void;
}

export type { AuthData, AuthInputData, AuthInputProps };
