import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCglJsKXZojKah8VqJztGURZPZC2oaJd4E",
  authDomain: "milestoneimgur.firebaseapp.com",
  databaseURL: "https://milestoneimgur-default-rtdb.firebaseio.com",
  projectId: "milestoneimgur",
  storageBucket: "milestoneimgur.appspot.com",
  messagingSenderId: "178108053100",
  appId: "1:178108053100:web:900b7c69f89e1661c48a49",
  measurementId: "G-Z5WK9D2CYX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };