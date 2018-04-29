import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleControlled from "./AvailableGamesTable";
import NewGame from "./NewGame";
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import * as routes from "../constants/routes";
import { Redirect } from 'react-router'

export default class GameSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
    }

    componentDidMount() {
    }
    onChange = updatedValue => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    render () {
        if (this.props.sport === '' && this.props.userID !== null) {
            return (<Redirect to={routes.SIGN_IN}/>);
        }
        return (
            <div>
                <h1>Sign up for Games!!!</h1>
                <MuiThemeProvider>
                    {(this.props.userID !== null)
                        ? <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.CREATE_GAME}>Create Game</Link></RaisedButton>
                        : <p> Sign in to create and join games!</p>}
                    <TableExampleControlled userID={this.props.userID} sport={this.props.sport}></TableExampleControlled>
                </MuiThemeProvider>

            </div>
        )
    }
}