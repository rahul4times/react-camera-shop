import React, { Component } from 'react';
import Header from './header';
import CameraList from './camera_list';
import Cart from './cart';
import Footer from './footer';



class MainContainer extends Component {
  render(){
    return(
      <div>
        <Header />
        <CameraList />
        <Cart />
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
