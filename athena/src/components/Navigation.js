import React from 'react';
<<<<<<< HEAD
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
                    <Toolbar username={this.props.username} signOut={this.props.signOut}/>
                </MuiThemeProvider>
            </div>
        );


    }
}
=======
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
    <div>
        <ul>
            <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
        </ul>
    </div>

export default Navigation
>>>>>>> 3e9cd89fd85fba9abc2965b88a815f295f977121
