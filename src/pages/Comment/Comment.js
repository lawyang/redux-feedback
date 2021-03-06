import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './comment.css'
import axios from 'axios';
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

class CommentPage extends Component{
    constructor(){
        super()
        this.state = {
            comment: '',
            toThankyou: false
        }
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    redirect = () => {
        this.setState({
            toThankyou: true
        })
    }

    // onclick will dispatch data to reducer
    // after dispatch then send data via axios to database    
    sendComment = () => {
        const body = {comment: this.state.comment, feeling: this.props.reduxStore.feedbackReducer.feeling, understanding: this.props.reduxStore.feedbackReducer.understanding, support: this.props.reduxStore.feedbackReducer.support};
        console.log('this is the thing to send to db',body);
        axios.post('/api/feedback', body)
            .then((response) => {
                console.log('post successfull')
                alert('Your Feedback Has Been Submitted')
                this.redirect();
            })
            .catch((error) => {
                console.log('error posting', error)
            })
        // this.props.dispatch(action);
    }

    render(){;
        if(this.state.toThankyou === true){
            return <Redirect to="/thankyou" />
        }
        return(
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography>
                            page 4/4
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            Any Comments you want to leave?
                        </Typography>
                        <Typography className="card" color="textSecondary">
                            Today you are you! That is truer than true! There is no one alive who is you-er than you!   
                        </Typography>
                        <br/>
                    <TextField className="commentBox" placeholder="Comment Here" onChange={this.handleComment}/>
                    </CardContent>
                    <CardActions>
                        <Button className="nextButton"  onClick={this.sendComment} size="large" color="primary" variant="contained"> Submit Feeback </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }





}

export default connect(mapReduxStateToProps)(CommentPage);