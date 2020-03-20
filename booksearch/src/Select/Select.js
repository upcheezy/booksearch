import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
    state = {
        option: '',
        filter: ''
    }

    optionChangeHandler = event => {
        this.setState({
            option: event.target.value,
            filter: event.target.value
        }, () => {this.props.filterHandler(this.state.option, this.state.filter)}) 
    } 

    render() {
        // console.log(this.state);
        return (
            <form>
                <label htmlFor={this.props.name}></label>
                <select name={this.props.name} id={this.props.name}  onChange={this.optionChangeHandler}>
                    {this.props.options.map(option => {
                        return (
                            <>
                                <option value={option.value}>{option.value}</option>
                            </>
                        )
                    })
                    }
                </select>
            </form>
        )
    }
}

export default Select;