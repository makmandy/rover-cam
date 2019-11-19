import React from 'react';
import './PhotoList.css';

const PhotoList = ({ photos }) => {
  console.log(photos)
  return (
  <div>
    {
      photos.map(photo => (<img alt="marsPhoto" src={`${photo.img_src}`}/>))
    }
  </div>
);
  }

export default PhotoList;