import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import SignInPage from './SignIn';
import SignOutPage from './SignOut';
import GameSignUp from './GameSignUp';
import AccountPage from './GamePlayerInfo';
import NewGame from './NewGame';
import SignInHome from './SignInHome'
import InitialSportSurvey from './InitialSurvey'
import EndOfGameSurvey from './EndOfGameSurvey'


import * as routes from '../constants/routes';

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {name: null, id: null},
            sport: "",
            gameID: "",
            surveySport: ""
        };
    }

    signInCallBack(signInInfo) {
        this.setState({user: {name: signInInfo.displayName, id: signInInfo.uid}});
        console.log(signInInfo);
    }

    signOutCallBack() {
        this.setState({user: {name: null, id: null}});
    }

    sportCallBack(sport) {
        console.log(sport);
        this.setState({sport: sport});
    }

    gameIDCallBack(gameID, surveySport) {
        this.setState({gameID: gameID, surveySport: surveySport});
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Navigation username={this.state.user.name} signOut={this.signOutCallBack.bind(this)} admin={this.state.user.name === 'ADMIN'}/>
                    <hr/>
                    <Route
                        exact path={routes.HOME}
                        component={() => <Home username={this.state.user.name}/>}
                    />
                    <Route
                        exact path={routes.SIGN_IN}
                        component={() => <SignInPage username={this.state.user.name}
                                                     callBack={this.signInCallBack.bind(this)}
                                                     userID={this.state.user.id}
                                                     sportCallBack={this.sportCallBack.bind(this)}
                                                     sport={this.state.sport}
                                                     admin={this.state.user.name === 'ADMIN'}/>}
                    />
                    <Route
                        exact path={routes.SIGN_OUT}
                        component={() => <SignOutPage callBack={() => this.signOutCallBack.bind(this)}/>}
                    />
                    <Route
                        exact path={routes.GAME_SIGN_UP}
                        component={() => <GameSignUp userID={this.state.user.id}
                                                     sport={this.state.sport}
                                                     admin={this.state.user.name === 'ADMIN'}/>}
                    />
                    <Route
                        exact path={routes.ACCOUNT}
                        component={() => <AccountPage userID={this.state.user.id} gameIDCallBack={this.gameIDCallBack.bind(this)}/>}
                    />
                    <Route
                        exact path={routes.CREATE_GAME}
                        component={() => <NewGame userID={this.state.user.id} sport={this.state.sport} admin={this.state.user.name === 'ADMIN'}/>}
                    />
                    <Route
                        exact path={routes.SIGN_IN_HOME}
                        component={() => <SignInHome userID={this.state.user.id} sportCallBack={this.sportCallBack.bind(this)}/>}
                    />
                    <Route
                        exact path={routes.INITIAL_SPORT_SURVEY}
                        component={() => <InitialSportSurvey sport={this.state.sport} userID={this.state.user.id}/>}
                    />
                    <Route
                        exact path={routes.END_OF_GAME_SURVEY}
                        component={() => <EndOfGameSurvey surveySport={this.state.surveySport} userID={this.state.user.id}  gameID={this.state.gameID}/>}
                    />
                </div>
            </Router>
        );
    }
}

export default App;