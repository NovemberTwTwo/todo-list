import { Dispatch, SetStateAction, createContext } from 'react';

interface IdStateType {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

const UserIdContext = createContext<IdStateType | null>(null);

export default UserIdContext;
export type { IdStateType };
