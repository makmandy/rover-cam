import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Photo.css';

class Photo extends Component {
  // add styling 
  // maybe metadata should be an overlay 
  render() {
    // const { photo } = this.props;
    const {
      id,
      cameraName,
      roverName,
      imageSrc,
    } = this.props;
    return (
      <div className="photoContainer">
        <img
          // alt={`marsRoverPhoto${photo.id}`}
          alt={`marsRoverPhoto${id}`}
          src={imageSrc}
          className="image"
        />
        <div className="overlay">
          <div className="metadata">
            {cameraName}
            <br/>
            ({roverName} Rover)
          </div>
        </div>
      </div>
    );
  }
}

Photo.propTypes = {
  id: PropTypes.string,
  cameraName: PropTypes.string,
  roverName: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Photo;