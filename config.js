import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAbrz4E_hUwFZoiZGQzzWPHCv6S6LKjqMc",
  authDomain: "school-attendance-33b2c.firebaseapp.com",
  databaseURL: "https://school-attendance-33b2c-default-rtdb.firebaseio.com",
  projectId: "school-attendance-33b2c",
  storageBucket: "school-attendance-33b2c.appspot.com",
  messagingSenderId: "572619000491",
  appId: "1:572619000491:web:a1e6c7345e12bcf65b85ee"
};

firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  