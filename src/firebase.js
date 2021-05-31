import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7VFTcaWjoyXp-zpAa2_w1Sma0hBQdQRI",
    authDomain: "ecom-3a320.firebaseapp.com",
    projectId: "ecom-3a320",
    storageBucket: "ecom-3a320.appspot.com",
    messagingSenderId: "826290754481",
    appId: "1:826290754481:web:173b38549e5c5fc10ca390",
    measurementId: "G-KGP127TD59"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db,auth};