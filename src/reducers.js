import { combineReducers } from 'redux';

import auth from './components/auth/reducer';
import balance from './components/balance/reducer';
import signIn from './components/signIn/reducer';

export default combineReducers({ auth, balance, signIn });
