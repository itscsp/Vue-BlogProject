import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo1UiUccuPEhRoZ24hUqM5Ut4UVeElaxE",
    authDomain: "fireblog-c6b48.firebaseapp.com",
    projectId: "fireblog-c6b48",
    storageBucket: "fireblog-c6b48.appspot.com",
    messagingSenderId: "804025892573",
    appId: "1:804025892573:web:a2613f7af91908bf9de534"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();