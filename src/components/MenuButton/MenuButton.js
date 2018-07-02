import React from 'react';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Link } from 'react-router-dom';


function MenuButtons(props) {
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