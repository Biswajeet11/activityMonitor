import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = {
  palette: {
    green: {
      main: '#009900',
      ultraLightGreen: '#e6ffe6',
      button: '#4caf50',
    },
    grey: {
      normal: 'grey',
      lightGrey: '#f2f2f2',
      ultraLightGrey: '#ebebeb',
      veryLightGrey: '#f4f6f8',
      textGrey: '#263238',
      textGreyLight: '#546e7a',
    },
    common: {
      white: '#ffffff',
      black: '#000',
    },
    orange: {
      normal: 'orange',
      ultraLightOrange: 'rgb(240, 219, 180)',
    },
    red: {
      main: '#e53935',
      text: '#D63E3E',
      background: '#FEEBEE',
    },
    fontSize: {
      xm: '9px',
      sm: '12px',
      md: '14px',
      large: '16px',
    },
    fontWeight: {
      normal: 400,
      smd: 500,
      md: 600,
      heavy: 800,
    },
    primary: {
      main: '#5850ec',
    },
  },
};

const theme = createMuiTheme(baseTheme);
export default theme;
