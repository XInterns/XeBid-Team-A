import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles';

import NavBar from './Components/Layout/Navbar';
import Sidedrawer from './Components/Layout/Sidedrawer';
import MainContent from './Components/Layout/MainContent';


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
      <BrowserRouter>       
        <div className={classes.root}>
          <CssBaseline />

          <NavBar drawerToggle={handleDrawerToggle}/>

          <Switch>
            
          </Switch>

          {/*<Sidedrawer drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>*/}

          {/*<MainContent/>*/}

         

        </div>         
      </BrowserRouter>
    );
}

