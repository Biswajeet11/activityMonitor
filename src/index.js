import React from 'react';
import ReactDOM from 'react-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById('root'));