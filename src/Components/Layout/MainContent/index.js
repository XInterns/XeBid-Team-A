import React from 'react';

import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default props => {
  const classes = useStyles();
  return(
    <main className={classes.content}>
      <div className={classes.toolbar} />
        
    </main>
  );
}