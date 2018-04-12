import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyCpUagmmIUE0Bal75fhHjDJJHOKasTEDH8",
    authDomain: "opiniionreact.firebaseapp.com",
    databaseURL: "https://opiniionreact.firebaseio.com",
    projectId: "opiniionreact",
    storageBucket: "opiniionreact.appspot.com",
    messagingSenderId: "610641958627"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;