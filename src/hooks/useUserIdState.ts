import { useContext } from 'react';
import UserIdContext, { IdStateType } from '../core/context/UserIdContext';

const useUserIdState = (): IdStateType => {
  const IdState = useContext(UserIdContext);
  if (!IdState) throw new Error(`Cannot find UserIdContextProvider`);
  return { ...IdState };
};

export default useUserIdState;
