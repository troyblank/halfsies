import { combineReducers } from 'redux';

import authStore from './components/auth/reducer';
import balanceStore from './components/balance/reducer';
import createStore from './components/createForm/reducer';
import logStore from './components/log/reducer';
import signInStore from './components/signIn/reducer';

export default combineReducers({ authStore, balanceStore, createStore, logStore, signInStore });
