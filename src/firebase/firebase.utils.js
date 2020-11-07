import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcI5fXEQYz0glcoOJPYue-zx6_okVs5mE",
  authDomain: "clothing-store-40766.firebaseapp.com",
  databaseURL: "https://clothing-store-40766.firebaseio.com",
  projectId: "clothing-store-40766",
  storageBucket: "clothing-store-40766.appspot.com",
  messagingSenderId: "30072027691",
  appId: "1:30072027691:web:61a621ab07237b1237086e",
  measurementId: "G-ES8FM70FM4",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;