import { combineReducers } from 'redux';
import userReducer from './userReducer'; // path to your userReducer file

const rootReducer = combineReducers({
  user: userReducer,
  // Other reducers go here
});

export default rootReducer;
