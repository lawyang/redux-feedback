import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Feeling from '../../pages/Feeling/Feeling';


class Home extends Component {
    render(){
        return(
            <div>
            <p>this is the homepage</p>
            
            <Link to='/feeling'>Take Feedback</Link>
            <Route path='/feeling' component={Feeling}/>

            </div>
        )
    }
}

export default Home;