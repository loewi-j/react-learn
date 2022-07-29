//StoreCreator用于创建store对象
import { StoreCreator, createStore } from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)