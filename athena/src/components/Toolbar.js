import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default class ToolbarExamplesSimple extends React.Component {

    /*constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <div>
                {
                    this.props.username
                        ? <ToolbarAfterSignIn signOut={this.props.signOut} admin={this.props.admin}></ToolbarAfterSignIn>
                        : <ToolbarBeforeSignIn signOut={this.props.signOut}></ToolbarBeforeSignIn>
                }
            </div>
        );
    }
}

class ToolbarBeforeSignIn extends React.Component {
    /*constructor(props) {
        super(props);
    }*/
    render () {
        return (
            <div>
                <Toolbar style={{backgroundColor: '#1E88E5'}}>
                    <ToolbarGroup>
                        <ToolbarTitle text="ATHENA" style={{color: '#000000'}}/>
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.SIGN_IN}>Sign In</Link></RaisedButton>
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.GAME_SIGN_UP}>Games</Link></RaisedButton>
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.HOME}>Home</Link></RaisedButton>
                        <ToolbarSeparator />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}
class ToolbarAfterSignIn extends React.Component {
    /*constructor(props) {
        super(props);
    }*/
    render () {
        return (
            <div>
                <Toolbar style={{backgroundColor: '#1E88E5'}}>
                    <ToolbarGroup>
                        <ToolbarTitle text="ATHENA" style={{color: '#000000'}}/>
                        <ToolbarSeparator />
                        {this.props.admin
                            ? <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.GAME_SIGN_UP}>Manage Games</Link></RaisedButton>
                            : <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.GAME_SIGN_UP}>Game Sign-up</Link></RaisedButton>
                        }
                        {this.props.admin
                            ? <p></p>
                            : <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.ACCOUNT}>My Games</Link></RaisedButton>
                        }
                        {this.props.admin
                            ? <p></p>
                            : <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.SIGN_IN}>Choose Different Sport</Link></RaisedButton>
                        }
                        <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.HOME}>Home</Link></RaisedButton>
                        <RaisedButton ><Link style={{textDecoration: 'none'}}  to={routes.HOME} onClick={() => {this.props.signOut(); auth.signOut();}}>Sign Out</Link></RaisedButton>

                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}