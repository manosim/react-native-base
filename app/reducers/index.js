import { combineReducers } from 'redux';

import navigationReducer from './navigation';

export default combineReducers({
  navigation: navigationReducer,
});
