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
            comment: 0,
            toThankyou: false
        }
    }


    render(){

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
                        {/* <input className="commentBox" placeholder="Comment Here" onChange={this.handleSupport} /> */}
                    
                    <TextField className="commentBox" placeholder="Comment Here" onChange={this.handleSupport}/>
                    
                    </CardContent>
                    <CardActions>
                        <Button className="nextButton"  onClick={this.sendSupport} size="large"> Submit Feeback </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }





}

export default connect(mapReduxStateToProps)(CommentPage);