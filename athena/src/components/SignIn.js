import React from 'react';
import { auth, db } from '../firebase';
import SignInHome from "./SignInHome";
class SignInPage extends React.Component {
    /*constructor(props) {
        super(props);
    }*/
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
                        ? <SignInHome userID={this.props.userID} sportCallBack={this.props.sportCallBack} sport={this.props.sport} admin={this.props.admin}/>
                        : <div>
                            <p>Open authorization/Enable credential input:  
                            <button onClick={() => this.startUI()}> Sign In </button> </p>
                            <div id="firebaseui-auth">
                            </div>

                        </div>
                }


            </div>


        )
    }
  
}
  

export default SignInPage;