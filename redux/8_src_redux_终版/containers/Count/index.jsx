import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decrementAction,
  incrementAction,
  incrementAsyncAction,
} from "../../redux/actions/count";

class Count extends Component {
  state = {};

  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(Number(value));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(Number(value));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(Number(value));
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(Number(value), 500);
  };

  render() {
    return (
      <div>
        <h1>当前求和为{this.props.count}</h1>
        <h3>总人数:{this.props.personLen}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步+</button>&nbsp;
      </div>
    );
  }
}

export default connect(
  (state) => ({ count: state.count, personLen: state.personList.length }),
  // 自动调用dispatch
  {
    increment: incrementAction,
    decrement: decrementAction,
    incrementAsync: incrementAsyncAction,
  }
)(Count);
