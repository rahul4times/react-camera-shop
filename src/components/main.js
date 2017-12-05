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
    const cameraList = this.props.cameras.map(camera => {
      return( <CameraList camera={camera}/>);
    })
    return(
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="7">{cameraList}</Col>
            <Col xs="5"><Cart /></Col>
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
