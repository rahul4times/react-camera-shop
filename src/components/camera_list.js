import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/cameras'
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

  handleClick = () => {

    console.log('btn works: ', this.props.camera.id);
    this.props.addToCart(this.props.camera.id)
  }

  render(){

    const imageSize = {
      width: '300px',
      height: '250px'
    };

    return(

      <div className="cameraList" key={this.props.camera.id}>
        <br/>
        <Card>
          <CardImg top width="100%" style={imageSize} src={this.props.camera.image} alt="" />
          <CardBody>
            <CardTitle>{this.props.camera.title}</CardTitle>
            <CardSubtitle>Price: ${this.props.camera.price}</CardSubtitle>
            <CardText>Rating: {this.props.camera.rating} out of 5</CardText>
            <Button color="primary"
              onClick={this.handleClick}
              >
              Add to cart</Button>
          </CardBody>
        </Card>
        <br/>
      </div>

    );
  }
}



function mapDispatchToProps(dispatch){
  return {
    addToCart: bindActionCreators(addToCart, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(CameraList);
