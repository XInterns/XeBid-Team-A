import React from 'react'
import {NavLink} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';

import CommonButton from '../../Common/Button';
import Dialog from '../../Common/Dialog';

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
      <CommonButton value='sign in' color='primary'>
        <NavLink to="/"/>
      </CommonButton>
      <Dialog mainText='sign up'/>
    </div>
  )
}