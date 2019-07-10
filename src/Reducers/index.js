import {combineReducers} from 'redux';

const selectedOptionReducer = (selectedOption=0,action) => {
  console.log(`I am inside reducer ${action.payload}`);
  if(action.type==='OPTION_SELECTED'){
    return action.payload
  }

  return selectedOption;
};

export default combineReducers({
  selectedOption: selectedOptionReducer
});
