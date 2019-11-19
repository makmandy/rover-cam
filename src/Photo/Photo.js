import React from 'react';

const Photo = ({ photo }) => {
  return (
    <img
      alt={`marsRoverPhoto${photo.id}`}
      src={`${photo.img_src}`}
    />
  )
}

export default Photo;