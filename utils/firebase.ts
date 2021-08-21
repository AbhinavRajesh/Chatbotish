import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDJj3Wg5zG64br1IO84A_4N0InXc9WZlKc",
    authDomain: "chatbotish.firebaseapp.com",
    projectId: "chatbotish",
    storageBucket: "chatbotish.appspot.com",
    messagingSenderId: "413275124528",
    appId: "1:413275124528:web:f8b38b26d5e4abd9b04ef5",
    measurementId: "G-1ZS8D8ZJ59",
  });
  firebase.analytics();
}

export const db = firebase.firestore();

// export const auth = firebase.auth();
export default firebase;
