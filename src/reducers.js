import { combineReducers } from 'redux'

import balanceStore from './components/balance/reducer'
import createStore from './components/createForm/reducer'
import logStore from './components/log/reducer'

export default combineReducers({ balanceStore, createStore, logStore })
