import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Footer from './Components/Layout/Footer';
import NavBar from './Components/Layout/Navbar';
import Sidedrawer from './Components/Layout/Sidedrawer';
import MainContent from './Components/Layout/MainContent';
import LandingPage from './Components/LandingPage/LandingPage';
// import Cards from './Components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const App = props => {
    const redirect= props.auth.uid? <Redirect to='/admin'/>:<Redirect to='/'/>;
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
            <Route exact path='/' component={() => (
              <>
                {redirect}

                <LandingPage/>
                <Footer/>
              </> 
            )}/>           
            <Route path='/admin' component={(props)=> (
              <>
                {redirect}
                <Sidedrawer {...props} drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>
                <MainContent/>
              </>
            )}/>            
          </Switch>
        </div>         
      </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);