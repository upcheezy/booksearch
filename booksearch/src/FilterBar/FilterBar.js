import React, { Component } from "react";
import "./FilterBar.css";
import Select from "../Select/Select";

class FilterBar extends Component {
    state = {
        printType: [
            {
                value: "all"
            },
            {
                value: "books"
            },
            {
                value: "magazines"
            }
        ],
        bookType: [
            {
                value: "partial"
            },
            {
                value: "full"
            },
            {
                value: "free-ebooks"
            },
            {
                value: "paid-ebooks"
            },
            {
                value: "ebooks"
            }
        ]
    };
    render() {
        return (
            <div className="filterBar">
                <Select
                    name="printType"
                    options={this.state.printType}
                    filterHandler={this.props.filterHandler}
                />
                <Select
                    name="bookType"
                    options={this.state.bookType}
                    filterHandler={this.props.filterHandler}
                />
            </div>
        );
    }
}

export default FilterBar;