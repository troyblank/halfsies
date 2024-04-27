import { combineReducers } from 'redux'

import createStore from './components/createForm/reducer'
import logStore from './components/log/reducer'

export default combineReducers({ createStore, logStore })
