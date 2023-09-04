import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDVI8oYtHZXqbiZdSZqBbyvDJhdSTyzgrI",
  authDomain: "achivers-app.firebaseapp.com",
  databaseURL: "https://achivers-app-default-rtdb.firebaseio.com",
  projectId: "achivers-app",
  storageBucket: "achivers-app.appspot.com",
  messagingSenderId: "113479577221",
  appId: "1:113479577221:web:1a6171c5e8b4d1441943ec"
};


const app= firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();