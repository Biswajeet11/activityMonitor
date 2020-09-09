import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker } from '@material-ui/pickers';
import { Alert, AlertTitle } from '@material-ui/lab';
import CustomModal from '../customModal';
import useStyles from './styles';


const Calendar = ({ userData, close }) => {
  const classes = useStyles();
  const todaysDate = moment()._d;
  const [selectedDate, setSelectedDate] = useState(todaysDate);
  const [activityData, setActivity] = useState({});
  let dates = [];

  const processedData = () => {
    userData.activity_periods.forEach((activity) => {
      let start = activity.start_time.split(' ')
      let end = activity.end_time.split(' ')
      let month = start[0]
      let day = Number(start[1])
      let year = Number(start[2])
      let startTime = start[4]
      let endTime = end[3]
      return dates.push({ date: `${year}-${month}-${day}`, startTime, endTime });
    });
  }
  processedData();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    date = moment(date).format("YYYY-MMM-D");
    const foundDate = dates.find((dateValue => {
      return dateValue.date === date
    }))
    if (foundDate) {
      setActivity({ startTime: foundDate.startTime, endTime: foundDate.endTime })
    }
    else {
      setActivity({})
    }
  };
  const renderDayInPicker = (date, selectedDate, dayInCurrentMonth, dayComponent) => {
    date = moment(date).format("YYYY-MMM-D");
    const foundDate = dates.find((dateValue => {
      return dateValue.date === date
    }))
    if (foundDate) {
      return (<div className={classes.dayWithDotContainer}>
        {dayComponent}
        <div className={classes.dayWithDot} />
      </div>)
    }

    return dayComponent
  }

  return (
    <CustomModal title="Activity" subtitle={`Monitor Activities of ${userData.real_name}`} open={true} handleClose={close}>
      
      <div className={classes.datePickerContainer}>
        <DatePicker
          renderDay={renderDayInPicker}
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          hilight
          value={selectedDate}
          onChange={handleDateChange}
          maxDate={todaysDate}
          showTodayButton
        />
      </div>
      {Object.keys(activityData).length > 0 ? (
        <div className={classes.root}>
          <Alert severity="info">
            <AlertTitle>Activity StartTime</AlertTitle>
            {activityData.startTime}
          </Alert>
          <Alert severity="info">
            <AlertTitle>Activity EndTime:</AlertTitle>
            {activityData.endTime}
          </Alert>
        </div>) : (
          <Alert severity="warning">
            <AlertTitle>No activity for the selected Day</AlertTitle>
          </Alert>)}
    </CustomModal>
  )
}

Calendar.propTypes = {
  userName: PropTypes.string,
  close: PropTypes.func,
}

export default Calendar;