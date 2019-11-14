import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAwP0OZ4L3MxfukMP8BAxrBzFFW3lSaD10",
    authDomain: "react-starter-7c1bf.firebaseapp.com",
    databaseURL: "https://react-starter-7c1bf.firebaseio.com",
    projectId: "react-starter-7c1bf",
    storageBucket: "react-starter-7c1bf.appspot.com",
    messagingSenderId: "219581542099",
    appId: "1:219581542099:web:b0b97fe1bf15f8edeaae26",
    measurementId: "G-J5V7HNFB3G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export default firebase;