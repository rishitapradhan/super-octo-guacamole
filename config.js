import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCW9t6l4KrnOSCUQS-BGB_gdCQYohlQHeA",
  authDomain: "book-santa-61c09.firebaseapp.com",
  databaseURL: "https://book-santa-61c09.firebaseio.com",
  projectId: "book-santa-61c09",
  storageBucket: "book-santa-61c09.appspot.com",
  messagingSenderId: "435321762572",
  appId: "1:435321762572:web:07ae52a9770329e1dfcf29"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
