import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

import PhotoList from './PhotoList';

import './App.css';

// const apiKey = 'O1K8q8dMY1QGZbhEozaCYKyFbvowCkWe6PE2apM1'; // mandymak.me@gmail.com
// const apiKey = '19ln0qyjBjLvAVVTMyDkySBtJ8bjPILEe9DMmyUz'; // the.mandylorian@yahoo.com
// const apiKey = 'oWGtn7Cr0mfDmhyKnZbqfhzlfoWNzX4NZ1xzwSw5'; // mandymak22@gmail.com
// const apiKey = 'puEOOLaX0YFF3XtIfYbH9SUXu1pSlT0LAfsG52OZ'; // hongyi.mak@icloud.com
const apiKey = 'SQs64vdbPO2EuNbCvC74KMJnvR8m1x6Wobgezqp6'; // karena.scott@gmail.com


class App extends Component {
  state = {
    date: 'Calling Mars for photos...',
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
      console.log(this.state.photoList)
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