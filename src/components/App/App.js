import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Feeling from '../../pages/Feeling/Feeling';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header header={Header}/>
        <Router>
          <div>
            <Home />

          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
