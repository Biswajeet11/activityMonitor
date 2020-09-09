import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  dayWithDotContainer: {
    position: 'relative'
  },
  dayWithDot: {
    position: 'absolute',
    height: 0,
    width: 0,
    border: '2px solid',
    borderRadius: 4,
    borderColor: theme.palette.primary.main,
    right: '50%',
    transform: 'translateX(1px)',
    top: '80%'
  },
  datePickerContainer: {
    marginBottom: '1rem',
  }
}));

export default useStyles;