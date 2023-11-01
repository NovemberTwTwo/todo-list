import './App.css';
import Grid from './components/UI/Grid';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light-theme';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import { useEffect, useReducer, useState } from 'react';
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
import TodoInput from './components/Todo/TodoInput';
import UserTokenContext from './core/context/UserTokenContext';

function App() {
  const [sessionState, dispatch] = useReducer(routeReducer, routeInitialState);
  const [userToken, setUserToken] = useState<string>('');

  const handleSessionRoute = () => {
    //eslint-disable-next-line no-restricted-globals
    dispatch(popAction(location.pathname));
  };

  useEffect(() => {
    (() => {
      window.addEventListener('popstate', handleSessionRoute);
    })();
    return () => {
      window.removeEventListener('popstate', handleSessionRoute);
    };
  }, []);

  useEffect(() => {
    console.log('Refresh token saved');
  }, [userToken]);

  return (
    <ThemeProvider theme={lightTheme}>
      <UserTokenContext.Provider value={{ userToken, setUserToken }}>
        <RouterDispatchContext.Provider value={dispatch}>
          <RouterStateContext.Provider value={sessionState.url}>
            <Grid>
              <Route url='/'>
                <div></div>
              </Route>
              <Route url='/login'>
                <LoginForm />
              </Route>
              <Route url='/register'>
                <RegisterForm />
              </Route>
              <Route url='/formtest'>
                <TodoInput />
              </Route>
            </Grid>
          </RouterStateContext.Provider>
        </RouterDispatchContext.Provider>
      </UserTokenContext.Provider>
    </ThemeProvider>
  );
}

export default App;
