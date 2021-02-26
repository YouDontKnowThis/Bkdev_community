import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlryitNKYhy_5x6cEumY0iYU9UbvKfNd8",
  authDomain: "bk-slack-clone.firebaseapp.com",
  projectId: "bk-slack-clone",
  storageBucket: "bk-slack-clone.appspot.com",
  messagingSenderId: "1018893817362",
  appId: "1:1018893817362:web:d811d04c2df4e4aaf6aacb",
  measurementId: "G-XG54BGT205",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dtb = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { dtb, auth, provider };
