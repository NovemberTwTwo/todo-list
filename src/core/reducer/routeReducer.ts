const ROUTE = 'ROUTE';
const POP_STATE = 'POP_STATE';

interface RouteData {
  url: string;
}

interface RouteAction {
  type: string;
  payload: string;
}

const routeInitialState: RouteData = {
  url: '/',
};

const routeReducer = (state: RouteData, action: RouteAction): RouteData => {
  switch (action.type) {
    case ROUTE:
      return {
        ...state,
        url: action.payload,
      };
    case POP_STATE:
      return {
        ...state,
        url: action.payload,
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
  return { type: POP_STATE, payload: url };
};

export { routeInitialState, routeReducer, routeAction, popAction };
export type { RouteAction };
