import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfgmfbmk5aUaXpsSZfrenisMgnAaFC7MU",
  authDomain: "project-4c821.firebaseapp.com",
  databaseURL: "https://project-4c821-default-rtdb.firebaseio.com",
  projectId: "project-4c821",
  storageBucket: "project-4c821.appspot.com",
  messagingSenderId: "577555178080",
  appId: "1:577555178080:web:e576d7701fe92be3c91905",
  measurementId: "G-TJSBZ3ZDV4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
