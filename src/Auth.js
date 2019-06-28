import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyAACLP6qdgePIo4yhD9EtZP-iA6mfYLwLs",
  authDomain: "xe-bid.firebaseapp.com"
},
{
  apiKey: "AIzaSyAACLP6qdgePIo4yhD9EtZP-iA6mfYLwLs",
  authDomain: "localhost"
})

class Auth extends Component {
  state = { isSignedIn: false }
  uiConfiguration = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //update for  more O-auth sources
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false   //SignInSuccess was depreciated so new signInSuccessWithAuthResult is being used
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      
      this.setState({ isSignedIn: !!user })
      
    })
  }

  render() {
    return (
      <div className="Auth">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile pic"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfiguration}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default Auth;