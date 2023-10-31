import { useContext } from 'react';
import UserTokenContext, {
  TokenStateType,
} from '../core/context/UserTokenContext';

const useUserTokenState = (): TokenStateType => {
  const TokenState = useContext(UserTokenContext);
  if (!TokenState) throw new Error(`Cannot find UserTokenContextProvider`);
  return { ...TokenState };
};

export default useUserTokenState;
