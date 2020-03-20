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
        filter: [{
            value: 'partial'
        },
        {
            value: 'full'
        },
        {
            value: 'free-ebooks'
        },
        {
            value: 'paid-ebooks'
        },
        {
            value: 'ebooks'
        }]
    }
    render() {
        return (
            <div className="filterBar">
                <Select name='PrintType' options={this.state.printType} filterHandler={this.props.filterHandler}/>
                <Select name='Filter' options={this.state.filter} filterHandler={this.props.filterHandler}/>
            </div>
        )
    }
}

export default FilterBar;