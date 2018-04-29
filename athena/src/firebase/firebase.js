import * as firebase from 'firebase';
import * as firebaseUI from 'firebaseui';

const config = {
    apiKey: "AIzaSyBprN0CDTi1_bEShBfwf1tsA-QC-UoFCHc",
    authDomain: "athena-73dca.firebaseapp.com",
    databaseURL: "https://athena-73dca.firebaseio.com",
    projectId: "athena-73dca",
    storageBucket: "athena-73dca.appspot.com",
    messagingSenderId: "34122182943"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth;
const auth1 = firebase.auth();
var db = firebase.database();
var storage = firebase.storage().ref();
const authUI = new firebaseUI.auth.AuthUI(firebase.auth());



export {
  auth,
  auth1,
  authUI,
  db,
  storage
};