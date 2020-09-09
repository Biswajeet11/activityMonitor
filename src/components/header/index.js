import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

const Header = () => {
  const localClasses = useStyles();
  return (
    <AppBar position="fixed" className={localClasses.appbar} >
      <Toolbar>
        <Typography>
          Users
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
