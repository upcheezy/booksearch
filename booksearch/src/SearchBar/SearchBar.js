import React, { Component } from "react";
import "./SearchBar.css";
import SearchBox from "../SearchBox/SearchBox";

class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <h1>Search: </h1>
                <SearchBox
                    filterHandler={this.props.filterHandler}
                    error={this.props.error}
                />
            </div>
        );
    }
}

export default SearchBar;