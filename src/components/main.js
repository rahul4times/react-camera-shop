import React from 'react';
import CameraList from './camera_list';
import Cart from './cart';


class MainContainer extends Component {
  render(){
    return(
      <div>
        <CameraList />
        <Cart />
      </div>
    );
  }
}

export default MainContainer;
