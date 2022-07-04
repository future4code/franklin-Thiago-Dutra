import { ThemeProvider } from '@emotion/react';
import './App.css';
import theme from './components/constants/theme';
import { Router } from './routes/Router';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
