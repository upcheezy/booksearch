import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        input: ''
    }

    changeHandler = event => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        console.log(this.state.input);
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" onChange={this.changeHandler}/>
                <button type='submit'>Search</button>
            </form>
        )
    }
}

export default SearchBox;