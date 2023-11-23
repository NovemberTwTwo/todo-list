const ROUTE = 'ROUTE';
const ROUTE_POP_STATE = 'ROUTE_POP_STATE';
const ROUTE_ERROR = 'ROUTE_ERROR';

interface RouteData {
  url: string;
  isError: boolean;
}

interface RouteAction {
  type: string;
  payload: string;
}

const routeInitialState: RouteData = {
  // eslint-disable-next-line no-restricted-globals
  url: location.pathname,
  isError: false,
};

const routeReducer = (state: RouteData, action: RouteAction): RouteData => {
  switch (action.type) {
    case ROUTE:
      return {
        ...state,
        url: action.payload,
        isError: false,
      };
    case ROUTE_POP_STATE:
      return {
        ...state,
        url: action.payload,
      };
    case ROUTE_ERROR:
      return {
        ...state,
        url: action.payload,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const routeAction = (url: string): RouteAction => {
  window.history.pushState(url, '', url);
  return { type: ROUTE, payload: url };
};

const popAction = (url: string): RouteAction => {
  return { type: ROUTE_POP_STATE, payload: url };
};

const errorAction = (url: string): RouteAction => {
  return { type: ROUTE_ERROR, payload: url };
};

export { routeInitialState, routeReducer, routeAction, popAction, errorAction };
export type { RouteAction };
