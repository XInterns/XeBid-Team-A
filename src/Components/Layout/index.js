import React from 'react';
import {CssBaseline} from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles';

import NavBar from './Navbar';
import Sidedrawer from './Sidedrawer';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

export default props => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBar drawerToggle={handleDrawerToggle}/>

      <Sidedrawer drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>

      <Footer />

    </div> 
  );
}
