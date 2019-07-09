import React from 'react';
import {Drawer,Divider,Hidden} from '@material-ui/core';
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
  );
}
