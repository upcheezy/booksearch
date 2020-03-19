import React, { Component } from 'react';
import './FilterBar.css';
import Select from '../Select/Select';

class FilterBar extends Component {
    state = {
        printType: [{
            value: 'all'
        }, {
            value: 'books'
        }, {
            value: 'magazines'
        }],
        bookType: []
    }
    render() {
        return (
            <div className="filterBar">
                <Select name='PrintType' options={this.state.printType} filterHandler={this.props.filterHandler}/>
            </div>
        )
    }
}

export default FilterBar;