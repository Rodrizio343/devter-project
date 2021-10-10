
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

const auth = getAuth()

export const loginWithGitHub = () => {
  signInWithPopup(auth, githubProvider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GithubAuthProvider.credentialFromError(error);
  });
}