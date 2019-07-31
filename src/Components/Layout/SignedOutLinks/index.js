import React from 'react'
import {NavLink} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';

import SignUpDialog from '../../Auth/SignUpDialog';
import SignInDialog from '../../Auth/SignInDialog';

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
    flexDirection: 'row',
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignInDialog mainText='sign in'/>
      <SignUpDialog mainText='sign up'/>
    </div>
  )
}