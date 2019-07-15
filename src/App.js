import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/Layout/Navbar';
import Sidedrawer from './Components/Layout/Sidedrawer';
import MainContent from './Components/Layout/MainContent';
import Footer from './Components/Layout/Footer'
import SignInDialog from './Components/Common/Dialog';

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
            <Route  path='/signup' component={SignInDialog}/>
          </Switch>

          {/*<Sidedrawer drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>*/}

          {/*<MainContent/>*/}

          {/*<Footer /> */}

        </div>         
      </BrowserRouter>
    );
}

