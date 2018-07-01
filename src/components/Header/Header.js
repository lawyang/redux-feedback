import React, { Component } from 'react';
import ButtonAppBar from '../Menu/Menu';


class Header extends Component {
    render(){
        return(
            <div>
                <ButtonAppBar />
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
            </div>
        )
    }
}

export default Header;

