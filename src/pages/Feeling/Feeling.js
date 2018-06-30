import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardTemplate from '../../components/CardTemplate/CardTemplate'


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// const styles = {
//     card: {
//     //   minWidth: 275,
//       width: 25,
//       display: 'inline-block'
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       marginBottom: 16,
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   };

class Feeling extends Component {
    render(){
        return(
            <div>
                <p>this is the Feelings Page</p>
                <p>Hello</p>
                
        <Card className="card">
            <CardContent>
                <Typography className="card" color="textSecondary">
                    Word of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                    this is the card body
                </Typography>
                <Typography className="card" color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
    
            </CardActions>
        </Card>
            </div>
        )
    }
}

export default (Feeling);