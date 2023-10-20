import './App.css';
import Grid from './components/UI/Grid';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light-theme';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import { useEffect, useReducer } from 'react';
import {
  popAction,
  routeInitialState,
  routeReducer,
} from './core/reducer/routeReducer';
import {
  RouterDispatchContext,
  RouterStateContext,
} from './core/context/RouterContext';
import Route from './components/Route/Route';

function App() {
  const [sessionState, dispatch] = useReducer(routeReducer, routeInitialState);

  const preventClose = (e: BeforeUnloadEvent) => {
    // e.preventDefault();
    // e.returnValue = '';
    // eslint-disable-next-line no-restricted-globals
    // dispatch(routeAction(location.pathname));
  };

  const testPopstate = (event: any) => {
    //eslint-disable-next-line no-restricted-globals
    console.log(location.pathname);
    //eslint-disable-next-line no-restricted-globals
    dispatch(popAction(location.pathname));
  };

  useEffect(() => {
    (() => {
      window.addEventListener('popstate', testPopstate);
    })();
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();
    return () => {
      window.removeEventListener('popstate', testPopstate);
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <RouterDispatchContext.Provider value={dispatch}>
        <RouterStateContext.Provider value={sessionState.url}>
          <Grid>
            <Route url='/'>
              <LoginForm />
            </Route>
            <Route url='/register'>
              <RegisterForm />
            </Route>
          </Grid>
        </RouterStateContext.Provider>
      </RouterDispatchContext.Provider>
    </ThemeProvider>
  );
}

export default App;
