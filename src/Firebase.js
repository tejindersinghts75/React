import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, push } from "firebase/database";

const Firebase = {
  apiKey: "AIzaSyDa5srzB11nW6C0rnlkKNSdWDna08FS1yg",
  authDomain: "alcester-578d6.firebaseapp.com",
  databaseURL: "https://alcester-578d6-default-rtdb.firebaseio.com",
  projectId: "alcester-578d6",
  storageBucket: "alcester-578d6.appspot.com",
  messagingSenderId: "215880484875",
  appId: "1:215880484875:web:b1344218a773a0a5099f0e",
  measurementId: "G-34W1M2JGR8"
};

const app = initializeApp(Firebase);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Realtime Database and get a reference to the service
export const db = getDatabase();

export default app;