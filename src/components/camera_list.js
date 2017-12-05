import React, { Component } from 'react'
import { connect } from 'react-redux'
import Img from 'react-image';
class CameraList extends Component {



  render(){

    const imageSize = {
      width: '200px',
      height: '180px'
    };

    const camList = this.props.cameras.map(camera => {
      return (
        <div className="cameraList" key={camera.id}>
          <Img
            style={imageSize}
            src={ camera.image }
          />
          <br/>
          <h3>{camera.title}</h3>
          Rating: {camera.rating} out of 5
          <br/>
          Price: ${camera.price}
          <br/>
          <button>Add to cart</button>
          <br/>
          <hr/>
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
