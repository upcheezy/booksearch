import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import FilterBar from "./FilterBar/FilterBar";
import DisplayResults from "./DisplayResult/DisplayResult";

class App extends Component {
  state = {
    books: [],
    searchTerm: "",
    printType: "",
    bookType: "",
    error: ""
  };

  filterHandler = option => {
    let url;
    // console.log(option);
    this.setState(
      {
        [option.name]: option.value
      },
      () => {
        url = `https://www.googleapis.com/books/v1/volumes?${
          this.state.searchTerm ? "q=" + this.state.searchTerm + "&" : ""
        }${this.state.bookType ? "&filter=" + this.state.bookType + "&" : ""}${
          this.state.printType ? "&printType=" + this.state.printType + "&" : ""
        }&key=AIzaSyBourK8drHqquXLvm8hxyTJ997zO7KX-Tc`;
        // console.log(url);
        fetch(url)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              this.setState({
                error: data.error
              });
            } else {
              this.setState({
                books: data.items,
                error: ""
              });
            }
          })
          .catch(err => {
            this.setState({
              error: err.message
            });
          });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header>Google Book Search</header>
        <SearchBar
          filterHandler={this.filterHandler}
          error={this.state.error}
        />
        <FilterBar filterHandler={this.filterHandler} />

        <DisplayResults books={this.state.books} />
      </div>
    );
  }
}

export default App;
