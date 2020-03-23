import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
    state = {
        name: "searchTerm",
        value: ""
    };

    changeHandler = event => {
        this.setState({
            value: event.target.value
        });
    };

    submitHandler = event => {
        // console.log(this.state);
        event.preventDefault();
        this.props.filterHandler(this.state);
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    id={this.props.error ? "invalid" : null}
                    type="text"
                    placeholder={this.props.error ? "must fill out search" : null}
                    onChange={this.changeHandler}
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBox;