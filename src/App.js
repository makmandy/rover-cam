import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    date: '',
    photoList: [],
  }
  
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>rovercam</h1>
        </header>
      </div>
    );
  }
}

export default App;

// fetch photos of today and render on load
// when date is changed, use the date to search photos of the selected date
// update state (photos) and pass to list of photos

// initial state includes:
  // photoList
  // date

// components in app
  // date selector
  // photogrid

// PhotoGrid
  // compose of Photo components

// 