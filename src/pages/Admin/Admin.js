import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackList from '../../components/FeedbackList/FeedbackList';
import axios from 'axios';
import './admin.css';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class AdminPage extends Component{
    componentDidMount(){
        this.getFeedback();
    }

    // fetch data from the db through axios GET method
    getFeedback = () => {
        axios.get('/api/feedback')
            .then((response) => {
                const action = {type: 'SET_DATA', payload: response.data};
                this.props.dispatch(action);
            })  
            .catch((error) => {
                console.log('error 404', error)
            })
    }

    render(){
        return(
            <div>
                <h1>Admin Page</h1>
                <FeedbackList getCall={this.getFeedback}/>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(AdminPage);