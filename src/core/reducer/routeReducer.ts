const ROUTE = 'ROUTE';

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
  window.history.pushState(action.payload, '', action.payload);

  switch (action.type) {
    case ROUTE:
      return {
        ...state,
        url: action.payload,
      };
    default:
      throw new Error();
  }
};

const routeAction = (url: string): RouteAction => {
  return { type: ROUTE, payload: url };
};

export { routeInitialState, routeReducer, routeAction };
export type { RouteAction };
