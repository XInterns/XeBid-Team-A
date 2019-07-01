import React from 'react';
import {AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles} from '@material-ui/core/styles';

import CommonButton from '../../Common/Button';

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

export default props => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={props.drawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          XeBid
        </Typography>
        <CommonButton/>
      </Toolbar>
    </AppBar>
  );
};

