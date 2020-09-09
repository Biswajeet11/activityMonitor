import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  media: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  dialogContainer: {
    display: 'flex',
  },
  titleContainer: {
    marginTop: 30,
    textAlign: 'center',
  },
  dayWithDot: {
    margin: "4px",
    border: '2px solid',
    borderRadius: 4,
    transform: 'translateX(1px)',
  },
  note: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center"
  },
  subTitleContainer: { paddingLeft: '4rem' },
}));

export default useStyles;
