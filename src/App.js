import react, {useEffect, useState} from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import {useSelector} from 'react-redux';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import {COLORS} from './styles/colors';

import Routes from './routes';
import history from './services/history';

import DefaultContext from './stores/defaultContext';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    default:{
      main: COLORS.gray0
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      text: {
        color: 'white',
      },
    },
  },
});

function App() {

  const [defaultContext, setDefaultContext] = useState({});
  const accessibility = useSelector(state => state.accessibility);

  return (
    <DefaultContext.Provider value={defaultContext}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
          <GlobalStyle theme={accessibility} />
        </Router>
      </ThemeProvider>
    </DefaultContext.Provider>
    
  );
}

export default App;
