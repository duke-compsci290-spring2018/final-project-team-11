import React from 'react';
import SportChooser from "./SportChooser";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Redirect } from 'react-router'
import * as routes from '../constants/routes';



export default class SignInHome extends React.Component {
    /*constructor(props) {
        super(props);
    }*/

    render () {
        if (this.props.admin) {
            return (<Redirect to={routes.GAME_SIGN_UP}/>);
        }
        return (
            <div>
                <h1>Choose Sport</h1>
                <MuiThemeProvider>
                    <SportChooser userID={this.props.userID} sportCallBack={this.props.sportCallBack} sport={this.props.sport}></SportChooser>
                </MuiThemeProvider>
            </div>
        )
    }
}