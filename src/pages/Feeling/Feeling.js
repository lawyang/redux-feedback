import React, { Component } from 'react';
import { connect } from 'react-redux';
import './feeling.css';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



// import green from '@material-ui/core/colors/green';
// import Radio from '@material-ui/core/Radio';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Feeling extends Component {
    constructor(){
        super()
        this.state = {
            feeling: 0,
            toPage: false
        }
    }

    // on button click
    handleFeeling = (event) => {
            this.setState({
                feeling: event.target.value,
            })
    }

    // send feeling feedback to the reducer
    sendFeeling = () => {
        const body = {feeling: parseInt(this.state.feeling)};
        const action = {type: 'ADD_FEEDBACK', payload: body}
        if (this.state.feeling <= 5){
            console.log(this.state.feeling);
            console.log(body);
            console.log(action);
            // dispatch to reducer goes here
            this.props.dispatch(action);
            //axios post to database goes here

            // reroute to next page
            this.setState({
                toPage: true
            })
            console.log('to next page',this.state.toPage);
            
        } else {
            console.log('not valid');
            alert('Input Not Valid')
        }
    }



    render(){
            if(this.state.toPage === true){
                return <Redirect to="/understanding" />
            }

        return(
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            How are you feeling today?
                        </Typography>
                        <Typography className="card" color="textSecondary">
                            (Help) 1 -- 2 -- 3 -- 4 -- 5 (Great)
                        </Typography>
                        <br/>
                        <input placeholder="enter here" onChange={this.handleFeeling} />
                    </CardContent>
                    <CardActions>
                        <Button className="nextButton"  onClick={this.sendFeeling} size="medium"> Next </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Feeling);