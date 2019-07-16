import React from 'react'
import {NavLink} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {signOut} from '../../../Actions/authActions';

import CommonButton from '../../Common/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
    flexDirection: 'row',
  }
}));

const SignedInLinks = props => {
  const classes = useStyles();

  const handleClick = () => {
    props.signOut();
  }

  return (
    <div className={classes.root}>
      <CommonButton value='logout' color='secondary' createUser={handleClick}>
        <NavLink to="/"/>
      </CommonButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut:()=>dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)