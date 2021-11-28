
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDUOgU6poODcOvu8ZnWK3mVwMYXKLA8XeE",
  authDomain: "devter-project.firebaseapp.com",
  projectId: "devter-project",
  storageBucket: "devter-project.appspot.com",
  messagingSenderId: "697652332745",
  appId: "1:697652332745:web:3887ec14fddb4c977aa518",
  measurementId: "G-W2B0E4JK4Y"
};

const fb = initializeApp(firebaseConfig);

const githubProvider = new GithubAuthProvider()

const auth = getAuth();

const mapUserFromFirebaseAuthToUser = (user) => {
  const {email, photoURL} = user;
  return {
    avatar: photoURL,
    username: email,
  } 
};

export const onAuthStateChange = (onChange) => {
  return auth.onAuthStateChanged(user => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    console.log(normalizedUser)
    onChange(normalizedUser);
  })
} 

export const loginWithGitHub = () => {
  return signInWithPopup(auth, githubProvider)
}