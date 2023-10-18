import { Dispatch, useContext } from 'react';
import { RouterDispatchContext } from '../core/context/RouterContext';
import { RouteAction } from '../core/reducer/routeReducer';

const useRouterDispatch = (): Dispatch<RouteAction> => {
  const dispatch = useContext(RouterDispatchContext);
  if (!dispatch) throw new Error(`Cannot find RouterContextProvider`);
  return dispatch;
};

export default useRouterDispatch;
