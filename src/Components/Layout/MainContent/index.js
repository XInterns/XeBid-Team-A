import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';

import UserManagement from '../../Admin/UserManagement';
import EventManagement from '../../Admin/EventSpaceManagement';
import CardDisplay from '../../Common/CardDisplay';

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

const MainContent =  props =>  {
  const classes = useStyles();
  
  const renderContent = option => {
    switch (option){
      case 0:
        return <Redirect to={`/${props.url}/dashboard`}/>
      case 1:
        return <Redirect to={`/${props.url}/event-management`}/>
      case 2:
        return <Redirect to={`/${props.url}/user-management`}/>
    }
  }

  const redirect = !props.auth.uid? <Redirect to='/'/>:renderContent(props.selectedOption);

  return(
    <>
      {redirect}
      {/* {renderContent(props.selectedOption)} */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Paper className={classes.root}>
            <Switch>
              <Route path={`/${props.url}/dashboard`} component={CardDisplay}/>
              <Route path={`/${props.url}/event-management`} component={EventManagement}/>
              <Route path={`/${props.url}/user-management`} component={UserManagement}/>
              </Switch>
          </Paper>        
      </main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    selectedOption: state.selectedOption,
    auth:state.firebase.auth,
  };
}

export default connect(mapStateToProps)(MainContent)
