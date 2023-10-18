import { Dispatch, useContext } from 'react';
import RouterContext from '../core/context/RouterContext';
import { RouteAction } from '../core/reducer/routeReducer';

const useRouterDispatch = (): Dispatch<RouteAction> => {
  const dispatch = useContext(RouterContext);
  if (!dispatch) throw new Error(`Cannot find RouterContextProvider`);
  return dispatch;
};

export default useRouterDispatch;
