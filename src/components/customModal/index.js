import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import useStyles from './styles';

const CustomModal = ({ children, title, subtitle, open, handleClose, width }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.modal}
      maxWidth={width}
      fullWidth={true}>
      <div className={classes.dialogContainer}>
        <DialogTitle className={classes.media}>
          {subtitle}
        </DialogTitle>
        <IconButton
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className={classes.note}>
        <Typography variant="body2" component="h2" align="center">
          Note: The blue dot(
        </Typography>
        <div className={classes.dayWithDot} />
        <Typography variant="body2" component="h2" align="center">
          ) in calendar denotes the active day
</Typography>
      </div>

      <DialogContent>{children}</DialogContent>
    </Dialog>

  );
};

CustomModal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  width: PropTypes.number,
};

export default CustomModal;
