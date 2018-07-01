import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './comment.css'
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

    sendComment = () => {
        const body = {comment: this.state.comment};
        const action = {type: 'ADD_COMMENT', payload: body};
        this.props.dispatch(action);
        alert('Your Feedback Has Been Submitted')
        this.redirect();
        console.log(this.redirect);
        
    }

    render(){
        if(this.state.toThankyou === true){
            return <Redirect to="/thankyou" />
        }
        return(
            <div>
                <Card className="card">
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