import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

import DateSelector from './DateSelector';
import PhotoList from './PhotoList';

import './App.css';

const apiKey = 'O1K8q8dMY1QGZbhEozaCYKyFbvowCkWe6PE2apM1'; // This API key allows 5000 requests per hour per IP address. The public one, DEMO_KEY, only permits 50 requests per hour.
const prettyMomentFormat = 'MM/DD/YYYY';

class App extends Component {
  state = {
    date: '',
    photoList: [],
    dateOfMostRecentPhotosAvailable: '',
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
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchMostRecentPhotos = async () => {
    let searchDate = moment().format('YYYY-MM-DD');
    
    // fetch photos from today
    await this.fetchPhotosByDate(searchDate);
    // if no photos are available, search the previous day (and the previous and so on) until there are photos available
    while (this.state.photoList.length === 0) {
      searchDate = moment(searchDate).subtract(1, 'days').format('YYYY-MM-DD');
      await this.fetchPhotosByDate(searchDate);
    }
    this.setState({
      date: searchDate,
      dateOfMostRecentPhotosAvailable: searchDate,
    });
    return;
  }

  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    }, () => console.log(this.state.date));
  }

  render() {
    const {
      date,
      photoList,
      dateOfMostRecentPhotosAvailable,
    } = this.state;

    const roverLandingDate = '2012-08-06';
    const prettyRoverLandingDate = moment(roverLandingDate).format(prettyMomentFormat);
    const prettyDateOfRecentPhotosAvailable = moment(dateOfMostRecentPhotosAvailable).format(prettyMomentFormat);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Major Tom Goes to Mars</h1>
          <h9 className="subtitle">this is Major Tom to Ground Control</h9>
          <h9 className="subtitle">{"i'm stepping through the door"}</h9>
          <h9 className="subtitle">{"and i'm floating in a most peculiar way"}</h9>
          <h9 className="subtitle">{"and the stars look very different today"}</h9>
          <DateSelector
            date={date}
            handleChangeDate={this.handleChangeDate}
            fetchPhotosByDate={() => this.fetchPhotosByDate(date)}
          />
          {
            photoList.length > 0 &&
            <div>
              <PhotoList photos={photoList} />
            </div>
          }
          <div>
          {/* loading text, when most recent photos are loading */}
          {
            !date &&
              <h3>
                Loading the most recent photos from Mars...
              </h3>
          }
          {/* EMPTY STATES */}
          {/* date selected is later than the most recent date of available photos */}
          {
            ((date > dateOfMostRecentPhotosAvailable) && (photoList.length === 0)) &&
              <h4>
                {`Sorry! Major Tom hasn't reported with new photos since ${prettyDateOfRecentPhotosAvailable}. Please try an earlier date.`}
              </h4>
          }
          {/* date selected is earlier than the Mars Rover landing date */}
          {
            (date && (date < roverLandingDate) && (photoList.length === 0)) &&
            <h4>
              {`Oops! Major Tom didn't land until ${prettyRoverLandingDate}. Please try a later date.`}
            </h4>
          }
          </div>
        </header>
        {
        photoList.length > 0 &&
          <div className="footerContainer">    
            <div className="footer">
              david bowie forever
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;