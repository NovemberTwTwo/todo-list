import './App.css';
import Grid from './components/UI/Grid';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light-theme';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import { useEffect, useReducer, useState } from 'react';
import {
  errorAction,
  popAction,
  routeAction,
  routeInitialState,
  routeReducer,
} from './core/reducer/routeReducer';
import {
  RouterDispatchContext,
  RouterStateContext,
} from './core/context/RouterContext';
import Route from './components/Route/Route';
import TodoInput from './components/Todo/TodoInput';
import UserIdContext from './core/context/UserIdContext';
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTER_ROUTE,
  ROUTES,
  TODO_CREATE_ROUTE,
  TODO_LIST_ROUTE,
} from './core/constant/constants';
import { firebaseAuth } from './core/firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import TodoList from './components/Todo/TodoList';

function App() {
  const [sessionState, dispatch] = useReducer(routeReducer, routeInitialState);
  const [userId, setUserId] = useState<string>('');

  const handleSessionRoute = () => {
    //eslint-disable-next-line no-restricted-globals
    const path = location.pathname;
    if (ROUTES.includes(path)) {
      dispatch(popAction(path));
      return;
    }
    dispatch(errorAction(path));
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUserId(user.uid);
        return;
      }
      dispatch(routeAction(LOGIN_ROUTE));
    });
  }, []);

  useEffect(() => {
    (() => {
      window.addEventListener('popstate', handleSessionRoute);
    })();
    return () => {
      window.removeEventListener('popstate', handleSessionRoute);
    };
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <RouterDispatchContext.Provider value={dispatch}>
          <RouterStateContext.Provider value={sessionState.url}>
            <Grid>
              <Route url={MAIN_ROUTE}>
                <div></div>
              </Route>
              <Route url={LOGIN_ROUTE}>
                <LoginForm />
              </Route>
              <Route url={REGISTER_ROUTE}>
                <RegisterForm />
              </Route>
              <Route url={TODO_CREATE_ROUTE}>
                <TodoInput />
              </Route>
              <Route url={TODO_LIST_ROUTE}>
                <TodoList />
              </Route>
              {sessionState.isError && <div>ErrorPage</div>}
            </Grid>
          </RouterStateContext.Provider>
        </RouterDispatchContext.Provider>
      </UserIdContext.Provider>
    </ThemeProvider>
  );
}

export default App;
