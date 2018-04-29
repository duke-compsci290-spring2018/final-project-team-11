import React from 'react';
import { auth, db } from '../firebase';
import * as routes from '../constants/routes';
import SignInHome from "./SignInHome";
class SignInPage extends React.Component {
    constructor(props) {
        super(props);
    }
    startUI() {
    var self = this;
    var uiConfig = {
      
      'signInOptions': [
        //auth.auth.GoogleAuthProvider.PROVIDER_ID,
        auth.auth.EmailAuthProvider.PROVIDER_ID
      ],
      'signInFlow': 'popup',
      //'credentialHelper': auth.authUI.CredentialHelper.NONE,
        
        'callbacks': {
        'signInSuccess': function(user) {
          db.createUser(user.uid, user.displayName, user.email);
          console.log(user);
          if (self.props.callBack) {
            self.props.callBack(user);
          }
          return false;
        }
      }
    };
    auth.authUI.start('#firebaseui-auth', uiConfig);
    }
        
    render() {
        return (
            <div>
                {
                    this.props.username
                        ? <SignInHome userID={this.props.userID} sportCallBack={this.props.sportCallBack} sport={this.props.sport}/>
                        : <div>
                            <button onClick={() => this.startUI()}> sign in </button>
                            <div id="firebaseui-auth">
                            </div>
                            <div>
                                <p>KEEP CLICKING SIGN IN!! AUTHENTICATION PROCESS REQUIRES 6 CLICKS</p>
                            </div>

                        </div>
                }


            </div>


        )
    }
  
}
  

export default SignInPage;