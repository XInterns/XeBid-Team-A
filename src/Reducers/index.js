import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import authReducer from './authReducer';

const selectedOptionReducer = (selectedOption=0,action) => {
  if(action.type==='OPTION_SELECTED'){
    return action.payload
  }

  return selectedOption;
};

export default combineReducers({
  auth: authReducer,
  selectedOption: selectedOptionReducer,
  firestore:firestoreReducer,
  firebase:firebaseReducer
});
