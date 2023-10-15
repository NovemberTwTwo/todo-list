import './App.css';
import Grid from './components/UI/Grid';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light-theme';
import LoginForm from './components/Auth/LoginForm';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid>
        <LoginForm />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
