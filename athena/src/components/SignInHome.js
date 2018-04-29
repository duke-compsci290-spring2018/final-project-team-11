import React from 'react';
import SportChooser from "./SportChooser";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class SignInHome extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>Sign In Home Page</h1>
                <MuiThemeProvider>
                    `<SportChooser userID={this.props.userID} sportCallBack={this.props.sportCallBack} sport={this.props.sport}></SportChooser>
                </MuiThemeProvider>
            </div>
        )
    }
}