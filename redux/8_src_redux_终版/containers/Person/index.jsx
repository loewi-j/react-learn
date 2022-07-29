import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.addPersonAction(personObj);
    console.log(personObj);
  };

  render() {
    return (
      <div>
        姓名:
        <input ref={(c) => (this.nameNode = c)} type="text" />
        年龄:
        <input ref={(c) => (this.ageNode = c)} type="text" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personList.map((p) => {
            return (
              <li key={p.id}>
                {p.name}---{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ personList: state.personList }), {
  addPersonAction: addPersonAction,
})(Person);
