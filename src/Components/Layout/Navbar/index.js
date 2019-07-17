import React from 'react';
import {AppBar,Toolbar,IconButton,Box} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SignedInLink from '../SignedInLinks';
import SignedOutLink from '../SignedOutLinks';

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow:1,
    zIndex: theme.zIndex.drawer + 2,
    background:'#6D2C5F',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title:{
    flexGrow:1,
  }
}));

const Navbar= props => {
  const classes = useStyles();
  const {auth}=props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLink/> : <SignedOutLink/>;
  const sideDrawer = auth.uid ? (
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={props.drawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton> ) : null;
        
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {sideDrawer}
        <Box className={classes.title}>
          <Link to='/'>
            <img src="https://www.ciol.com/wp-content/uploads/2019/04/Xebia-brings-Survey-on-Digitization.jpg" alt="XEBIA LOGO" height="40" width="90" />
          </Link>
        </Box>
        {links}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth:state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)