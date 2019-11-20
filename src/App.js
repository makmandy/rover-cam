import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

import DateSelector from './DateSelector';
import PhotoList from './PhotoList';

import './App.css';

const apiKey = 'O1K8q8dMY1QGZbhEozaCYKyFbvowCkWe6PE2apM1'; // mandymak.me@gmail.com
// const apiKey = '19ln0qyjBjLvAVVTMyDkySBtJ8bjPILEe9DMmyUz'; // the.mandylorian@yahoo.com
// const apiKey = 'oWGtn7Cr0mfDmhyKnZbqfhzlfoWNzX4NZ1xzwSw5'; // mandymak22@gmail.com
// const apiKey = 'puEOOLaX0YFF3XtIfYbH9SUXu1pSlT0LAfsG52OZ'; // hongyi.mak@icloud.com
// const apiKey = 'SQs64vdbPO2EuNbCvC74KMJnvR8m1x6Wobgezqp6'; // karena.scott@gmail.com


class App extends Component {
  state = {
    date: '',
    photoList: [],
  }
  
  componentDidMount() {
    this.fetchMostRecentPhotos();
  }
  
  fetchPhotosByDate = async (date) => {
    console.log('searching date', date);
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

  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    }, () => console.log(this.state.date));

  }

  clearDate = () => {
    this.setState({
      date: '',
    });
  }

  render() {
    const {
      date,
      photoList,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>rovercam</h1>
          <DateSelector
            date={date}
            handleChangeDate={this.handleChangeDate}
            clearDate={this.clearDate}
            fetchPhotosByDate={() => this.fetchPhotosByDate(date)}
          />
          {
            photoList.length > 0 ? (
            <div>
              <PhotoList photos={photoList} />
            </div>
            ) : (
            <div>
              <h3>
                Loading the most recent photos from Mars...
              </h3>
            </div>
            )
          }
        </header>
      </div>
    );
  }
}

export default App;