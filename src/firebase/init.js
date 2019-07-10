/* eslint-disable */

// import firebase from 'firebase';

// import firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwTIcR9KlsikVjakXAOA986xmjNh6ImNY",
    authDomain: "vuechatapp-b9057.firebaseapp.com",
    databaseURL: "https://vuechatapp-b9057.firebaseio.com",
    projectId: "vuechatapp-b9057",
    storageBucket: "",
    messagingSenderId: "508826788427",
    appId: "1:508826788427:web:7724dff37a4394f5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore();

  export default firebaseApp.firestore();   

// const auth = firebaseApp.auth();
// const db = firebaseApp.firestore();

// export { db, auth };
