import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

import PhotoList from './PhotoList';

import './App.css';

// const apiKey = 'O1K8q8dMY1QGZbhEozaCYKyFbvowCkWe6PE2apM1';
// const apiKey = '19ln0qyjBjLvAVVTMyDkySBtJ8bjPILEe9DMmyUz';
const apiKey = 'oWGtn7Cr0mfDmhyKnZbqfhzlfoWNzX4NZ1xzwSw5';

class App extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    photoList: [],
  }
  
  componentDidMount() {
    this.fetchMostRecentPhotos();
  }
  
  fetchPhotosByDate = async (date) => {
    const marsRoverAPI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`;
    await axios.get(marsRoverAPI)
      .then((response) => {
        this.setState({
          photoList: response.data.photos || []
        });
      });
  }

  fetchMostRecentPhotos = async () => {
    let searchDate = moment().format('YYYY-MM-DD')
    await this.fetchPhotosByDate(searchDate);
    while (this.state.photoList.length === 0) {
      searchDate = moment(searchDate).subtract(1, 'days').format('YYYY-MM-DD');
      await this.fetchPhotosByDate(searchDate);
    }
    this.setState({date: searchDate});
    return;
  }

  render() {
    const {
      date,
      photoList,
    } = this.state;

    // make pretty date

    return (
      <div className="App">
        <header className="App-header">
          <h1>rovercam</h1>
          <h3>{date}</h3>
          {
          photoList.length > 0 &&
            <PhotoList photos={photoList} />
          }
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