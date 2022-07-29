//StoreCreator用于创建store对象
import { StoreCreator, createStore, applyMiddleware, combineReducers } from 'redux'
import reducers from './reducers/inedx'
import thunk from 'redux-thunk'

export default createStore(reducers, applyMiddleware(thunk))