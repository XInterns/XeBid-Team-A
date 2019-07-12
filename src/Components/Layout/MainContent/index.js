import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

import AddUsers from '../../Admin/CreateUsers';


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
      case 1:
        return <Typography variant='h3'>Event Management</Typography>
      case 2:
        return <AddUsers/>
      case 3:
        return <Typography variant='h3'>View Users</Typography>
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
