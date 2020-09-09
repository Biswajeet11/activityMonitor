import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  appbar: {
    background: '#4C39A4',
  },
  appIcon: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  appBarImage: {
    width: '1.5rem',
    borderRadius: 50,
  },
  logoImage: {
    width: '3.0rem',
    borderRadius: 10,
  },
  logoutImage: {
    width: '1.5rem',
    borderRadius: 10,
  },
  userName: {
    marginLeft: '1rem',
  },
}));

export default useStyles;
