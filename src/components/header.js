import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Header extends Component {

   state = {
     open: false
   };


  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){
    return(
      <div>
        <AppBar
          title="Camera Shop"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}


export default Header;
