import React, { Component } from 'react'
import { connect } from 'react-redux'
import Camera from './camera';
import Img from 'react-image';
class CameraList extends Component {



  render(){
    const imageSize = {
      width: '90px',
      height: '100px'
    };
    const camList = this.props.cameras.map(camera => {
      return (
        <div key={camera.id}>
          <Img
            style={imageSize}
            src={ camera.image }
          />
          {camera.title}
          {camera.title}
        </div>
      );
    });
    return(
      <div>

        {camList}

      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('state on camera list page: ', state.cameras);
  return {
    cameras: state.cameras
  }
}

export default connect(mapStateToProps, null)(CameraList);
