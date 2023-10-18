import { Dispatch, createContext } from 'react';
import { RouteAction } from '../reducer/routeReducer';

const RouterContext = createContext<Dispatch<RouteAction> | null>(null);

export default RouterContext;
