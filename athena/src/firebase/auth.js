import {
    auth,
    auth1,
    authUI
} from './firebase';

/*// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);*/

export const signOut = () =>
    auth.signOut;

export const getCurrentUser = () => {
    return auth1.getCurrentUser();
}


export {
    auth,
    authUI
};
