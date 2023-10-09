import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/UI/Grid';
import Card from './components/UI/Card';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/light-theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
