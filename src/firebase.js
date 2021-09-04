import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhHib1MaF0XhVmbuuOQP_DIAbBs9l7QkM",
    authDomain: "e-commerce-451d0.firebaseapp.com",
    projectId: "e-commerce-451d0",
    storageBucket: "e-commerce-451d0.appspot.com",
    messagingSenderId: "336822477723",
    appId: "1:336822477723:web:d259b1994719b7c48a373e",
    measurementId: "G-77XR9Q3PNR"
  });

  const db = firebase.firestore(); //tempo real
  const auth = firebase.auth(); //autenticação
  const storage = firebase.storage(); //armazenamento
  const functions = firebase.functions();

  export {db, auth, storage, functions};

