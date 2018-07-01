import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//Components
import Header from '../Header/Header';
//Pages
import Feeling from '../../pages/Feeling/Feeling';
import ThankYou from '../../pages/ThankYou/ThankYou';
import UnderStanding from '../../pages/Understanding/Understanding';
import Support from '../../pages/Support/Support';
import CommentPage from '../../pages/Comment/Comment';
import Home from '../../pages/Home/Home';


const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header header={Header}/>


        <p>-----Page Counter goes here-----</p>
        <Router>
          <div>
            <br/>
            <Route exact path='/' component={Home}/>
            <Route path='/feeling' component={Feeling}/>
            <Route path='/understanding' component={UnderStanding}/>
            <Route path='/support' component={Support}/>
            <Route path='/comment' component={CommentPage}/>
            <Route path='/thankyou' component={ThankYou}/>
            
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
