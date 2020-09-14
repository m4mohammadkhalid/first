import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import {composeWithDevTools} from "redux-devtools-extension";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore
 
const fbConfig = {
    apiKey: "AIzaSyBnJD7rh69H0l5sZ5pwHzBU61KKceXJBQ4",
    authDomain: "first-first-676c5.firebaseapp.com",
    databaseURL: "https://first-first-676c5.firebaseio.com",
    projectId: "first-first-676c5",
    storageBucket: "first-first-676c5.appspot.com",
    messagingSenderId: "13616046275",
    appId: "1:13616046275:web:12a73c88010e4e16fcc276",
    measurementId: "G-ZST10PCG8Q"
}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState , composeWithDevTools());
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
}

export default store;