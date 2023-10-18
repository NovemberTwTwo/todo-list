import { Dispatch, createContext } from 'react';
import { RouteAction } from '../reducer/routeReducer';

const RouterDispatchContext = createContext<Dispatch<RouteAction> | null>(null);
const RouterStateContext = createContext<string>('/');

export { RouterDispatchContext, RouterStateContext };
