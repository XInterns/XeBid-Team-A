import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBsb4GsoAYoriJjtxj5kUd6JwEfQGuz1V8",
  authDomain: "xebid-team-a.firebaseapp.com",
  databaseURL: "https://xebid-team-a.firebaseio.com",
  projectId: "xebid-team-a",
  storageBucket: "",
  messagingSenderId: "339730045562",
  appId: "1:339730045562:web:d563fca928e8788e"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;