import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const MainContent = props =>  {
  const classes = useStyles();

  const renderContent = option => {
    switch (option){
      case 0:
        return <Typography variant='h3'>Dashboard</Typography>
        break;
      case 1:
        return <Typography variant='h3'>Event Management</Typography>
        break;
      case 2:
        return <Typography variant='h3'>Create Usert</Typography>
        break;
      case 3:
        return <Typography variant='h3'>Delete User</Typography>
        break;
    }
  }

  return(
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Paper className={classes.root}>
          {renderContent(props.selectedOption)}
        </Paper>
    </main>
  );
}

const mapStateToProps = state => {
  return {selectedOption: state.selectedOption};
}

export default connect(mapStateToProps)(MainContent)
