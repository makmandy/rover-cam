import React from 'react';

import './PhotoList.css';
import Photo from '../Photo';

const PhotoList = ({ photos }) => (
  <div>
    {
      photos.map(photo => (
        <Photo
          key={photo.id}
          photo={photo}
        />
      ))
    }
  </div>
);

export default PhotoList;