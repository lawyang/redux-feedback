import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import AdminTable from '../AdminTable/AdminTable';

const mapReduxStateToProps = (reduxStore) => ({
    feedback: reduxStore.DataListReducer
})


class FeedbackList extends Component{
    constructor(){
        super()
        this.state = {
        }
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
        this.getFeedback;
        return(
            <div>
                <button onClick={this.getFeedback}>click me</button>
                <pre>{JSON.stringify(this.props.feedback)}</pre>
                {this.props.feedback.map((taco, i) => {
                    return <dataItem key={i} taco={taco} />
                })}
                
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FeedbackList);