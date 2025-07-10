//v11
// firebase.js (or firebaseConfig.js)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBLspW4l_7_OXxECZr3l-toZDFoaOsUud0",
  authDomain: "vue-blog-system-fb07d.firebaseapp.com",
  projectId: "vue-blog-system-fb07d",
  storageBucket: "vue-blog-system-fb07d.firebasestorage.app",
  messagingSenderId: "932691693777",
  appId: "1:932691693777:web:f2a40d661ff88fd8e8b5f0",
  measurementId: "G-BBLP1X3KSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Firestore service
const db = getFirestore(app);

export { db };





//v8
// import firebase from "firebase/app";
// import "firebase/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBLspW4l_7_OXxECZr3l-toZDFoaOsUud0",
//   authDomain: "vue-blog-system-fb07d.firebaseapp.com",
//   projectId: "vue-blog-system-fb07d",
//   storageBucket: "vue-blog-system-fb07d.firebasestorage.app",
//   messagingSenderId: "932691693777",
//   appId: "1:932691693777:web:f2a40d661ff88fd8e8b5f0",
//   measurementId: "G-BBLP1X3KSF"
// };

// //init firebase 
// firebase.initializeApp(firebaseConfig)

// //database setup 
// let db=firebase.firestore();

// export {db};
