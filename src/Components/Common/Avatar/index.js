import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default props => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="https://image.spreadshirtmedia.com/image-server/v1/compositions/111234482/views/1,width=650,height=650,appearanceId=1,version=1560425676/spike-spiegel-cowboy-bebop.jpg" className={classes.bigAvatar} />
    </Grid>
  );
}