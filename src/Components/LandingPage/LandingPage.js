import React from 'react';
import './page.css';

class LandingPage extends React.Component{
    render(){
        return(
                <div className="background">
                  <div className="text">
                    <h1>Travel. Experience. Enjoy. It's your <span>life</span>.</h1>
                    <a href="#"><h5>Find out more</h5></a>
                  </div>
                  <div className="foot">
                    <p>Created with <span></span> by <a href="https://www.facebook.com/george.kalyvianakis"> Giorgos Kalyvianakis</a></p>
                  </div>
                </div>
        );
    }
}

export default LandingPage;
           
            