import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './thankyou.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ThankYou extends Component{
    constructor(){
        super()
        this.state = {
            toApp: false
        }
    }

    redirect = () => {
        this.setState({
            toApp: true
        })
    }

    render(){
        if(this.state.toApp === true){
            return <Redirect to="/" />
        }
        return(
            <div>
                <Typography variant="display3">
                    Thank You!!!!!
                </Typography>
                <Button className="thankyouButton"  onClick={this.redirect} size="large" color="primary" variant="contained">Submit a New Feedback </Button>
            </div>
        )
    }
}

export default ThankYou;