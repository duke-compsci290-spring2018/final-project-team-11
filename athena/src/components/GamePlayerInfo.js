import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserGamesTable from "./UserGamesTable";



export default class AccountPage extends React.Component {
    /*constructor (props) {
        super(props)
    };*/
    render () {
        return (
            <div>
                <h1>Account Page</h1>
                <MuiThemeProvider>
                    <UserGamesTable userID={this.props.userID}></UserGamesTable>
                </MuiThemeProvider>
            </div>
        )
    }
}