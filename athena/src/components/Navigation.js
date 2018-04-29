import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './Toolbar.js'



export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: true,
            value: 3,
        };
    }

    render() {
        return (
            <div>

                <MuiThemeProvider>
                    <Toolbar username={this.props.username} signOut={this.props.signOut} admin={this.props.admin}/>
                </MuiThemeProvider>
            </div>
        );


    }
}