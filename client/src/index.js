import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@mui/material";
import "@material-ui/core"

import { createTheme, ThemeProvider } from '@material-ui/core'

// MUI - theme
const theme = createTheme({
  palette: {
    primary: {
      // Sunglo
      main: "#de7171", 
    },
    secondary: {
      // sandrift
      main: "#a68674", 
    },
    error: {
      // pomegranate
      main: "#f44336", 
    },
    warning: {
      // carrot-orange
      main: "#f58c22" 
    },
    info: {
      // fiord
      main: "#3f4868" 
    },
    success: {
      // asparagus
      main: "#67a35b" 
    },
    neutral: {
      // gull-gray
      main: "#9CA6B5"
    }
  },
  typography: {
    fontFamily: [
      'Nunito', 'sans-serif', 'Nunito Sans', 'Atma', 'cursive', 'Londrina Solid', 'Josefin Sans'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      color: '#DE7171',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
    p: {
      fontSize: 18,
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);