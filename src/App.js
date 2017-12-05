import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getCameras } from './actions/cameras';

// Components
import MainContainer from './components/main';


class App extends Component {

  componentDidMount() {
    this.props.getCameras()
  }

  render() {
    return (
      <div className="App">

          <MainContainer />

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
