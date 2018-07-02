import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminTable from '../../components/AdminTable/AdminTable';
import FeedbackList from '../../components/FeedbackList/FeedbackList';
import axios from 'axios';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})


class AdminPage extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        this.getFeedback();
    }

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
                <FeedbackList />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(AdminPage);