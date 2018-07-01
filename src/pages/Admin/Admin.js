import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminTable from '../../components/AdminTable/AdminTable';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})


class AdminPage extends Component{
    constructor(){
        super()
        this.state = {

        }
    }





    render(){
        return(
            <div>
                <p>This is the admin page</p>
                <AdminTable />
            </div>
        )
    }
}

export default AdminPage;