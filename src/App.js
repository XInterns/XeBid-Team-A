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
;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const App = props => {

    const route = (role) => {
      switch (role){
        case 0:
          return 'admin';
        case 1:
          return 'event-manager';
        case 2:
          return 'team-owner';
        case 3:
          return 'participant';
        case 4:
          return 'audience';
      }
    }

    const redirect= props.auth.uid? <Redirect to={`/${route(props.profile.role)}`}/>:<Redirect to='/'/>;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    }

    return (
      <BrowserRouter>       
        <div className={classes.root}>
          <CssBaseline />

          {redirect}

          <NavBar drawerToggle={handleDrawerToggle}/>

          <Switch>
            <Route exact path='/' component={() => (
              <>
                {redirect}

                {/* <LandingPage/> */}
                <Footer/>
              </> 
            )}/>           
            <Route path='/admin' component={(props)=> (
              <>
                {redirect}
                <Sidedrawer {...props} drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>
                <MainContent url='admin'/>
              </>
            )}/> 
            <Route path='/event-manager' component={(props)=> (
              <>

                <Sidedrawer {...props} drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>
                <MainContent url='event-manager'/>
              </>
            )}/> 
            <Route path='/participant' component={(props)=> (
              <>
  
                <Sidedrawer {...props} drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>
                <MainContent url='participant'/>
              </>
            )}/>  
            <Route path='/team-owner' component={(props)=> (
              <>
 
                <Sidedrawer {...props} drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>
                <MainContent url='team-owner'/>
              </>
            )}/> 
            <Route path='/audience' component={(props)=> (
              <>
    
                <Sidedrawer {...props} drawerToggle={handleDrawerToggle} mobileOpenCheck={mobileOpen}/>
                <MainContent url='audience'/>
              </>
            )}/>          
          </Switch>
        </div>         
      </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(App);