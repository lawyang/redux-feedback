import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Link, Route } from 'react-router-dom';


function MenuButtons(props) {
  const { classes } = props;
  return (
    <div >
        <Router>
            <Link to="/">
                <Button className="menuButton">Home</Button>
            </Link>
        </Router>
        <Router>
            <Link to="/admin">
                <Button className="menuButton">Admin</Button>
            </Link>
        </Router>

    </div>
  );
}


export default (MenuButtons);