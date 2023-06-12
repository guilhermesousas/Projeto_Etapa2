import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDa8BXlxThiByNOuDFnhXcrxrs24nI8N04",
  authDomain: "chatapp-a6f3c.firebaseapp.com",
  projectId: "chatapp-a6f3c",
  storageBucket: "chatapp-a6f3c.appspot.com",
  messagingSenderId: "901117831652",
  appId: "1:901117831652:web:43117bfec12225c279bff1"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;