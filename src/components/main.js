import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
// Components
import Header from './header';
import CameraList from './camera_list';
import Cart from './cart';
import Footer from './footer';



class MainContainer extends Component {
  render(){
    // This displays all cameras
    const cameraList = this.props.cameras.sort((a,b)=> b.id - a.id).map(camera => {
      return( <CameraList key={camera.id} camera={camera}/>);
    });

    // This displays items in cart
    const itemsInCart = this.props.cameras.filter(camera => {
      return camera.in_cart === true;
    });

    return(
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="7">{cameraList}</Col>
            <Col xs="5"><Cart items={itemsInCart}/></Col>
          </Row>
        </Container>
        <Footer />
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
export default connect(mapStateToProps, null)(MainContainer);
