// update tools
// $ npm install -g firebase-tools
// $ firebase init

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDW84qeyQH9c7kx1WnAjqAU9YoC7S1Ncjo",
  authDomain: "metalpromet-lfqbkw45k5w.firebaseapp.com",
  projectId: "metalpromet-lfqbkw45k5w",
  storageBucket: "metalpromet-lfqbkw45k5w.firebasestorage.app",
  messagingSenderId: "594190123905",
  appId: "1:594190123905:web:16de4aa1bdaf5be5cc1e80",
};

// Initialize Firebase
export const app = 0 < getApps().length ? getApp() : initializeApp(config);

// Initialize Cloud Firestore and get a reference to the service
export const auth = getAuth(app);

// init auth providers
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "consent select_account",
});

export const firebaseOAuthProviders = {
  google: googleAuthProvider,
};

export const firestore = getFirestore(app);
