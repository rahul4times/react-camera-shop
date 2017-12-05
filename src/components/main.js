import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// Components
import Header from './header';
import CameraList from './camera_list';
import Cart from './cart';
import Footer from './footer';



class MainContainer extends Component {
  render(){
    return(
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="8"><CameraList /></Col>
            <Col xs="4"><Cart /></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
