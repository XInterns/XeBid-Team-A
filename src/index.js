import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';

import reducers from './Reducers';
import App from './App';
import fbConfig from './Config/fbconfig';

const store= createStore(reducers, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile: true,userProfile: 'users',attachAuthIsReady:true})
  )
);

store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root')
    );    
})


