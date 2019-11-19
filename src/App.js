import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

import './App.css';

import PhotoList from './PhotoList';

const apiKey = 'O1K8q8dMY1QGZbhEozaCYKyFbvowCkWe6PE2apM1';

class App extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    photoList: [],
  }
  
  componentDidMount() {
    this.fetchPhotosByDate(this.state.date);
  }
  
  fetchPhotosByDate = (date) => {
    const currentComponent = this;
    const marsRoverAPI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`;
    axios.get(marsRoverAPI)
      .then(function(response) {
        console.log(response.data)
        if (response.data && response.data.photos.length >0) {
          currentComponent.setState({
            photoList: response.data.photos
          });
        } else {
          currentComponent.setState({
            date: '2019-09-27'
          }, () => {console.log(`state, ${currentComponent.state}`); currentComponent.fetchPhotosByDate(currentComponent.state.date)})
        }
      });
  }

  render() {
    const {
      date,
      photoList,
    } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>rovercam</h1>
          <h3>{date}</h3>
          <PhotoList photos={photoList} />
        </header>
      </div>
    );
  }
}

export default App;

// fetch photos from https://api.nasa.gov/ (Mars Rover Photos API)

// find most recent date in which there is at least one photo
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