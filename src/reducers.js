import { combineReducers } from 'redux';

import auth from './components/auth/reducer';
import signIn from './components/signIn/reducer';

export default combineReducers({ auth, signIn });
