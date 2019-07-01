import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';
import {Button} from '@material-ui/core/';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: red[500],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (    
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        Logout
      </ColorButton>
  );  
}