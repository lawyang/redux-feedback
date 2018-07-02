import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuButtons from '../MenuButton/MenuButton';

function ButtonAppBar(props) {
  return (
    <div className="menuBar">
      <AppBar position="static">
        <Toolbar>
          <MenuButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default (ButtonAppBar);