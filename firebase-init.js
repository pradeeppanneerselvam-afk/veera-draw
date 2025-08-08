// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtSOwCDWOv2EmZfM4Nv5B_4eCayh3y8os",
  authDomain: "coolie-e15ef.firebaseapp.com",
  projectId: "coolie-e15ef",
  storageBucket: "coolie-e15ef.firebasestorage.app",
  messagingSenderId: "133487554623",
  appId: "1:133487554623:web:37bdd703305165e76a488a",
  measurementId: "G-QPWPFB60K2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db;