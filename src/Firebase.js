import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCgb3eG6o4TpRCuCRzip6Ic7uTsXyr41k",
    authDomain: "clone-b940f.firebaseapp.com",
    databaseURL: "https://clone-b940f.firebaseio.com",
    projectId: "clone-b940f",
    storageBucket: "clone-b940f.appspot.com",
    messagingSenderId: "479190357274",
    appId: "1:479190357274:web:b6325e00753169c0f708a3",
    measurementId: "G-PH488CV18T"

});


const auth = firebase.auth();
export {auth};