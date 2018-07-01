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

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class Comment extends Component{
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
                            (Kill Steals) 1 -- 2 -- 3 -- 4 -- 5 (Hype-Man)
                        </Typography>
                        <br/>
                        <input placeholder="enter here" onChange={this.handleSupport} />
                    </CardContent>
                    <CardActions>
                        <Button className="nextButton"  onClick={this.sendSupport} size="Large"> Submit Feeback </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }





}

export default connect(mapReduxStateToProps)(Comment);