import React from 'react'
import {NavLink} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';

import CommonButton from '../../Common/Button';

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
      <CommonButton value='logout' color='secondary'>
        <NavLink to="/"/>
      </CommonButton>
    </div>
  )
}

