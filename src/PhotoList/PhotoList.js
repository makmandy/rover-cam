import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../Photo';

import './PhotoList.css';

const PhotoList = ({ photos }) => (
  <div>
    {
      photos.map(photo => (
        <Photo
          className="photoList"
          key={photo.id}
          photo={photo}
        />
      ))
    }
  </div>
);

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()),
}

export default PhotoList;
