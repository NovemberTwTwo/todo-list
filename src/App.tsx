import './App.css';
import Grid from './components/UI/Grid';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light-theme';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import { useReducer } from 'react';
import { routeInitialState, routeReducer } from './core/reducer/routeReducer';
import {
  RouterDispatchContext,
  RouterStateContext,
} from './core/context/RouterContext';
import Route from './components/Route/Route';

function App() {
  const [sessionState, dispatch] = useReducer(routeReducer, routeInitialState);

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
