import React, { Component } from 'react';

class Camera extends Component {
  render(){

    return(
      <div>
        {this.props.camera.title}
      </div>
    );
  }
}
export default Camera;
