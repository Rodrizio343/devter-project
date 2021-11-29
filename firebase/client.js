import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUOgU6poODcOvu8ZnWK3mVwMYXKLA8XeE",
  authDomain: "devter-project.firebaseapp.com",
  projectId: "devter-project",
  storageBucket: "devter-project.appspot.com",
  messagingSenderId: "697652332745",
  appId: "1:697652332745:web:3887ec14fddb4c977aa518",
  measurementId: "G-W2B0E4JK4Y",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);
const { collection, addDoc } = firestore;
const githubProvider = new GithubAuthProvider();

const auth = getAuth();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    username: email,
    email,
    uid,
  };
};

export const onAuthStateChange = (onChange) => {
  return auth.onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  return signInWithPopup(auth, githubProvider);
};

export const addDevit = async ({ avatar, content, userId, userName }) => {
  return await addDoc(collection(db, "devits"), {
    avatar,
    content,
    userId,
    userName,
    createdAt: firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};
