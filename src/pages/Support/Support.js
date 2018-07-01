import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './support.css'
//card props
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})


class Support extends Component{
    constructor(){
        super()
        this.state = {
            support: 0,
            toComment: false
        }
    }

    //on button click setstate value for understanding
    handleSupport = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    sendSupport = () => {
        const body = {support: parseInt(this.state.support)};
        const action = {type: 'ADD_SUPPORT', payload: body};
        if (this.state.support <= 5){
            console.log(this.state.support);
            this.props.dispatch(action);
            this.setState({
                toComment: true
            });
        } else {
            console.log('not valid for understanding page');
            alert('Input Not Valid. Please enter an integer from 1 - 5')
        }
    }

    render(){
        if(this.state.toComment === true){
            return <Redirect to="/comment" />
        }
        return(
            <div>
            <Card className="card">
                <CardContent>
                    <Typography variant="headline" component="h2">
                        How well do you feel supported?
                    </Typography>
                    <Typography className="card" color="textSecondary">
                        (Kill Steals) 1 -- 2 -- 3 -- 4 -- 5 (Hype-Man)
                    </Typography>
                    <br/>
                    <TextField className="supportBox" laceholder="enter here" onChange={this.handleSupport} />
                </CardContent>
                <CardActions>
                    <Button className="nextButton"  onClick={this.sendSupport} size="medium"> Next </Button>
                </CardActions>
            </Card>
        </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Support);