import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';

export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.username
                        ? <ToolbarAfterSignIn signOut={this.props.signOut}></ToolbarAfterSignIn>
                        : <ToolbarBeforeSignIn signOut={this.props.signOut}></ToolbarBeforeSignIn>
                }
            </div>
        );
    }
}

class ToolbarBeforeSignIn extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Toolbar style={{backgroundColor: '#1E88E5'}}>
                    <ToolbarGroup>
                        <ToolbarTitle text="ATHENA" />
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.SIGN_IN}>Sign In</Link></RaisedButton>
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.GAME_SIGN_UP}>Games</Link></RaisedButton>
                        <ToolbarSeparator />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}
class ToolbarAfterSignIn extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Toolbar style={{backgroundColor: '#1E88E5'}}>
                    <ToolbarGroup>
                        <ToolbarTitle text="ATHENA" />
                        <ToolbarSeparator />
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.GAME_SIGN_UP}>Game Sign-up</Link></RaisedButton>
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.ACCOUNT}>My Games</Link></RaisedButton>
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.SIGN_IN}>Choose Different Sport</Link></RaisedButton>
                        <RaisedButton ><Link style={{textDecoration: 'none'}}  to={routes.HOME} onClick={() => {console.log(this.props.username); this.props.signOut(); auth.signOut();}}>Sign Out</Link></RaisedButton>

                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}