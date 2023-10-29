const TOKEN_SET: string = 'TOKEN_SET';
const TOKEN_DELETE: string = 'TOKEN_DELETE';

interface TokenAction {
  type: string;
  payload: string;
}

interface TokenData {
  userToken: string;
  hasToken: boolean;
}

const tokenInitialState: TokenData = {
  userToken: '',
  hasToken: false,
};

const tokenReducer = (state: TokenData, action: TokenAction): TokenData => {
  switch (action.type) {
    case TOKEN_SET:
      return {
        ...state,
        userToken: action.payload,
        hasToken: true,
      };
    case TOKEN_DELETE:
      return {
        ...state,
        userToken: '',
        hasToken: false,
      };
    default:
      throw new Error();
  }
};

const tokenSetAction = (userToken: string): TokenAction => {
  return { type: TOKEN_SET, payload: userToken };
};

const tokenDeleteAction = (): TokenAction => {
  return { type: TOKEN_DELETE, payload: '' };
};

export { tokenInitialState, tokenReducer, tokenSetAction, tokenDeleteAction };
export type { TokenAction };
