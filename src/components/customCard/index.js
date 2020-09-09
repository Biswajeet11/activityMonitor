import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { coderImage } from '../../assets/images';
import useStyles from './styles';
import { classes } from 'istanbul-lib-coverage';


const CustomCard = ({ title, timeZone }) => {
  const localClasses = useStyles();
  return (
    <Card>
      <CardMedia
        className={localClasses.cardMediaContainer}
        image={coderImage}
        title={title}
      />
      <CardContent>
        <CardActionArea>
          <Typography variant="subtitle1" component="h2" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="h2" align="center"
            className={localClasses.textContainer}>
            <AccessTimeIcon className={classes.locationIcon} />
            {timeZone}
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

CustomCard.propTypes = {
  title: PropTypes.string,
  timeZone: PropTypes.string,
}
export default CustomCard;