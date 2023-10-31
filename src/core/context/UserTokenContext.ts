import { Dispatch, SetStateAction, createContext } from 'react';

interface TokenStateType {
  userToken: string;
  setUserToken: Dispatch<SetStateAction<string>>;
}

const UserTokenContext = createContext<TokenStateType | null>(null);

export default UserTokenContext;
export type { TokenStateType };
