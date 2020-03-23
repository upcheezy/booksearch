import React, { Component } from "react";
import "./Select.css";

class Select extends Component {
  state = {
    name: "",
    value: ""
  };

  optionChangeHandler = event => {
    this.setState(
      {
        name: event.target.name,
        value: event.target.value
      },
      () => {
        this.props.filterHandler(this.state);
      }
    );
  };

  render() {
    // console.log(this.state);
    return (
      <form>
        <label htmlFor={this.props.name}></label>
        <select
          name={this.props.name}
          id={this.props.name}
          onChange={this.optionChangeHandler}
        >
          {this.props.options.map(option => {
            return (
              <>
                {this.props.name === "bookType" ? (
                  <option value="none" selected hidden disabled>
                    no filter
                  </option>
                ) : null}
                <option value={option.value}>{option.value}</option>
              </>
            );
          })}
        </select>
      </form>
    );
  }
}

export default Select;