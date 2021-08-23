import firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALrFLSb_bcAMw-pwtmjPklxkn30GymOiw",
  authDomain: "planet-express-7867c.firebaseapp.com",
  projectId: "planet-express-7867c",
  storageBucket: "planet-express-7867c.appspot.com",
  messagingSenderId: "278625131540",
  appId: "1:278625131540:web:067f56b9c8aff16da55b01",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
