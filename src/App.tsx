import './App.css';
import Grid from './components/UI/Grid';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light-theme';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import { useReducer } from 'react';
import { routeInitialState, routeReducer } from './core/reducer/routeReducer';
import RouterContext from './core/context/RouterContext';

function App() {
  const [sessionState, dispatch] = useReducer(routeReducer, routeInitialState);

  return (
    <ThemeProvider theme={lightTheme}>
      <RouterContext.Provider value={dispatch}>
        <Grid>
          {sessionState.url === '/' ? <LoginForm /> : <RegisterForm />}
        </Grid>
      </RouterContext.Provider>
    </ThemeProvider>
  );
}

export default App;
