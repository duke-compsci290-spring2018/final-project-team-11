import React from 'react';
import { auth } from '../firebase';

class SignOutPage extends React.Component {
    componentDidMount() {
    //auth.auth.signOut();
    auth.signOut();
    }
    render() {
        return (
            <div>
                <h2>Sign Out</h2>
            </div>
        )
    }
  

}

export default SignOutPage;
