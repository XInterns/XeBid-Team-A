import React from 'react';
import {Drawer,Divider,Hidden,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import SelectList from '../Sidedrawer-List';
import Avatar from '../../Common/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  drawerTop: {
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default props => {
  const { container } = props;
  const classes = useStyles();

  const drawer = (
    <div>
      <Hidden xsDown>
        <div className={classes.toolbar}/>
      </Hidden>
        <Avatar/>
      <Divider />  
      <SelectList/>   
    </div>
  );
  
  return(
    <>
      <nav className={classes.drawer} aria-label="Mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={props.mobileOpenCheck}
            onClose={props.drawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h6">
            Let's do this thing alright
        </Typography>
      </main>
  </>
  )
}
