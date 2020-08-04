import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhVQAiuPDodkQyY0S43FF-ZvwigRcyWYg",
  authDomain: "profile-form.firebaseapp.com",
  databaseURL: "https://profile-form.firebaseio.com",
  projectId: "profile-form",
  storageBucket: "profile-form.appspot.com",
  messagingSenderId: "537265897800",
  appId: "1:537265897800:web:ffa074a7a912d59c82737d"
};

let app;

if(!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase

