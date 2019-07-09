import React, {Component} from 'react';

class GoogleAuth extends Component {
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId: '460667233430-d2qikcsfunjf7ejo8nr4201322b3v107.apps.googleusercontent.com',
        scope:'email'
      });
    });
  }

  render(){
    return <div>Google Aujth</div>;
  }
}