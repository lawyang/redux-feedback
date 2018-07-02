import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const mapReduxStateToProps = (reduxStore) => ({
    feedback: reduxStore.DataListReducer
})

class FeedbackList extends Component{
    render(){

        return(
            <div>
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
                                <TableCell> <Button className="deleteButton" size="small" color="secondary" variant="contained">Delete</Button> </TableCell>
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