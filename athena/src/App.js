import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

<<<<<<< HEAD
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
=======
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
>>>>>>> fc657070a64eaecc23bc27c13142b0dfb1816498

import * as routes from '../constants/routes';

const App = () =>
    <Router>
        <div>
            <Navigation />

            <hr/>

            <Route
                exact path={routes.LANDING}
                component={() => <LandingPage />}
            />
            <Route
                exact path={routes.SIGN_UP}
                component={() => <SignUpPage />}
            />
            <Route
                exact path={routes.SIGN_IN}
                component={() => <SignInPage />}
            />
            <Route
                exact path={routes.PASSWORD_FORGET}
                component={() => <PasswordForgetPage />}
            />
            <Route
                exact path={routes.HOME}
                component={() => <HomePage />}
            />
            <Route
                exact path={routes.ACCOUNT}
                component={() => <AccountPage />}
            />
        </div>
    </Router>

export default App;