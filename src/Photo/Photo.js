import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
  // add styling 
  // maybe metadata should be an overlay 
  render() {
    const { photo } = this.props;
    return (
      <div className="photoContainer">
        <img
          alt={`marsRoverPhoto${photo.id}`}
          src={`${photo.img_src}`}
          // onMouseEnter={() => this.setState({showMetadata: true})}
          // onMouseOut={() => this.setState({ showMetadata: false})}
          className="image"
        />
        <div className="overlay">
          <div className="metadata">
            {photo.camera['full_name']}
            <br/>({photo.rover.name} Rover)
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;