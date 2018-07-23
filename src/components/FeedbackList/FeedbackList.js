import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './FeedbackList.css';
import axios from 'axios';

import Admin from '../../pages/Admin/Admin';

const mapReduxStateToProps = (reduxStore) => ({
    feedback: reduxStore.DataListReducer
})


class FeedbackList extends Component{

    deleteButton = (id) => {
        axios.delete(`/api/feedback/${id}`)
            .then((response) => {
                console.log('delete worked')
                this.props.getCall()
            })
            .catch((error) => {
                console.log('delete did not work', error);
            })
    }
    
    render(){
        return(
            <div className="adminTable">
                <Paper >
                    <Table >
                    <TableHead>
                        <TableRow>
                        <TableCell> Feeling </TableCell>
                        <TableCell> Comprehension </TableCell>
                        <TableCell> Support </TableCell>
                        <TableCell>  Comments </TableCell>
                        <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.feedback.map(taco => {
                            return(
                            <TableRow key={taco.id}>
                                <TableCell> {taco.feeling} </TableCell>
                                <TableCell> {taco.understanding} </TableCell>
                                <TableCell> {taco.support} </TableCell>
                                <TableCell> {taco.comments} </TableCell>
                                <TableCell> <Button className="deleteButton" onClick={ ()=> this.deleteButton(taco.id)} size="small" color="secondary" variant="contained">Delete</Button> </TableCell>
                            </TableRow> 
                            )
                        })}
                    </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FeedbackList);