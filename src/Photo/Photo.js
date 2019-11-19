import React, { Component } from 'react';

class Photo extends Component {
  state = {
    showMetadata: false,
  }

  render() {
    const { showMetadata } = this.state;
    const { photo } = this.props;
    return (
      <div>
      {/* make images responsive in size */}
      {/* if showMetadata, then render text */}
      {/*otherwise show image */}
      {
        !showMetadata ?
      (<img
        alt={`marsRoverPhoto${photo.id}`}
        src={`${photo.img_src}`}
        onMouseOver={() => this.setState({showMetadata: true})}
        onMouseOut={() => {
          this.setState({ showMetadata: false});
          console.log('out');
        }}
      />) : 
      (<div
      onMouseOut={() =>this.setState({ showMetadata: false})}>{photo.camera['full_name']}</div>)
      }
      </div>
    )
}
}

export default Photo;