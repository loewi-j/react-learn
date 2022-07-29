import React, { Component } from 'react'
import store from '../../redux/store'
import {incrementAction, decrementAction} from '../../redux/count_action'

export default class Count extends Component {

  state = {}

  increment = () => {
    const {value} = this.selectNumber
    store.dispatch(incrementAction(Number(value)))
  }
  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch(decrementAction(Number(value)))
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch(incrementAction(Number(value)))
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch(incrementAction(Number(value)))
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步+</button>&nbsp;
      </div>
    )
  }
}
