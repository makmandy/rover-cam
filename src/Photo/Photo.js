import React from 'react';
import PropTypes from 'prop-types';

import './Photo.css';

const Photo = ({
  id,
  cameraName,
  roverName,
  imageSrc,
}) => (
  <div className="photoContainer">
    <img
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

Photo.propTypes = {
  id: PropTypes.number,
  cameraName: PropTypes.string,
  roverName: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Photo;