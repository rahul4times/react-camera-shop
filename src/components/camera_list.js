import React, { Component } from 'react'
import { connect } from 'react-redux'
import Img from 'react-image';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button }
  from 'reactstrap';


class CameraList extends Component {

  render(){

    const imageSize = {
      width: '300px',
      height: '250px'
    };

    const camList = this.props.cameras.map(camera => {
      return (
        <div className="cameraList" key={camera.id}>
          <br/>
          <Card>
            <CardImg top width="100%" style={imageSize} src={camera.image} alt="" />
            <CardBody>
              <CardTitle>{camera.title}</CardTitle>
              <CardSubtitle>Price: ${camera.price}</CardSubtitle>
              <CardText>Rating: {camera.rating} out of 5</CardText>
              <Button color="primary">Add to cart</Button>
            </CardBody>
          </Card>
          <br/>
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
