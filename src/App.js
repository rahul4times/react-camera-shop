import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getCameras } from './actions/cameras';

// Material Design UI stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// Components
import Header from './components/header';
import CameraList from './components/camera_list';

class App extends Component {

  componentDidMount() {
    this.props.getCameras()
  }

  render() {
    return (
      <div className="App">

          <Header />
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
