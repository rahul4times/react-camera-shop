import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';


import { getCameras } from './actions/cameras';
import CameraList from './components/camera_list';

class App extends Component {

  componentDidMount() {
    this.props.getCameras()
  }

  render() {
    return (
      <div className="App">
        <CameraList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCameras: bindActionCreators(getCameras, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
