import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './understanding.css'
//card props
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})


class Understanding extends Component{
    constructor(){
        super()
        this.state = {
            understanding: 0,
            toSupport: false
        }
    }

    //on button click setstate value for understanding
    handleUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    sendUnderstanding = () => {
        const body = {understanding: parseInt(this.state.understanding)};
    }

    render(){
        return(
            <div>
            <Card className="card">
                <CardContent>
                    <Typography variant="headline" component="h2">
                        How well are you understanding the content?
                    </Typography>
                    <Typography className="card" color="textSecondary">
                        (No Clue) 1 -- 2 -- 3 -- 4 -- 5 (Einstein)
                    </Typography>
                    <br/>
                    <input placeholder="enter here" onChange={this.handleUnderstanding} />
                </CardContent>
                <CardActions>
                    <Button className="nextButton"  onClick={this.sendUnderstanding} size="medium"> Next </Button>
                </CardActions>
            </Card>
        </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Understanding);