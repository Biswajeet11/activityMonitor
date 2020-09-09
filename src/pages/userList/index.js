import React, { useState } from 'react';
import { GridList, Grid } from '@material-ui/core';

import CustomCard from '../../components/customCard';
import Calendar from '../../components/calendar';
import users from '../../users.json';
import useStyles from './styles';

const UserList = () => {
  const localClasses = useStyles();
  const [userData, setUserData] = useState({ open: false });
  const handleItemModal = (userData) => {
    setUserData({ ...userData, open: true })
  }
  const setTheModalClose = () => {
    setUserData({ ...userData, open: false });
  };
  return (
    <div className={localClasses.tableContainer}>
      <GridList spacing={20} cellHeight={200} cols={4} >
        {users.members.map((user) => {
          return (
            <Grid className={localClasses.root} item key={user.id}
              xs={6} sm={4} md={3} zeroMinWidth={true}
              onClick={() => handleItemModal(user)}>
              <CustomCard title={user.real_name} timeZone={user.tz} />
            </Grid>
          )
        })}
      </GridList>
      {userData.open && <Calendar userData={userData} close={setTheModalClose} />}
    </div>
  )
}

export default UserList;