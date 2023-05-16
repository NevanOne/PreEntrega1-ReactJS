import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fG2KZqLv7HOQg50PP0Xez6LNSXP3ANc",
  authDomain: "goro-s-gaming-lair.firebaseapp.com",
  projectId: "goro-s-gaming-lair",
  storageBucket: "goro-s-gaming-lair.appspot.com",
  messagingSenderId: "552207669519",
  appId: "1:552207669519:web:b483204f974724dff5867a",
  measurementId: "G-3TF9LT28WR"
};

//Inicializar app

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}