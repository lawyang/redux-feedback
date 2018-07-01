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
import Support from '../../pages/Support/Support';
import CommentPage from '../../pages/Comment/Comment';


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
            <Link to='/feeling'><h1>Take Feedback</h1></Link>
            <Route exact path='/feeling' component={Feeling}/>
            <Route exact path='/understanding' component={UnderStanding}/>
            <Route exact path='/support' component={Support}/>
            <Route exact path='/comment' component={CommentPage}/>
            
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
