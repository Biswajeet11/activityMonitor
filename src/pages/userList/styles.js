import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& > * + *': {
      width: '25%',
      height: '207px',
    }
  },
  tableContainer: {
    marginRight: '2rem !important',
    marginLeft: '2rem !important',
    marginTop: '5rem !important',
  },
});

export default useStyles;