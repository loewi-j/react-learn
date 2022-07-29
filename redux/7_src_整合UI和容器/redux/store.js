//StoreCreator用于创建store对象
import { StoreCreator, createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'
export default createStore(countReducer, applyMiddleware(thunk))