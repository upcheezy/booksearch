import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';


class App extends Component {
  state = {
    books: []
  }


  filterHandler = option => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=time&printType=${option}&key=AIzaSyBourK8drHqquXLvm8hxyTJ997zO7KX-Tc`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          books: data.items
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <header>Google Book Search</header>
        <SearchBar />
        <FilterBar filterHandler={this.filterHandler}/>
      </div>
    );
  }
}

export default App;
