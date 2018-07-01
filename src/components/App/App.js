import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
//Components
import Header from '../Header/Header';
//Pages

import Feeling from '../../pages/Feeling/Feeling';
import ThankYou from '../../pages/ThankYou/ThankYou';
import UnderStanding from '../../pages/Understanding/Understanding';

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
            <Link to='/feeling'>Take Feedback</Link>
            <Route exact path='/feeling' component={Feeling}/>
            <Route exact path='/understanding' component={UnderStanding}/>
            
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
