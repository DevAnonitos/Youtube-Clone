import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCYO6cc5CD19uom0j012K70b7iRDRwcJgg",
  authDomain: "video-6b289.firebaseapp.com",
  projectId: "video-6b289",
  storageBucket: "video-6b289.appspot.com",
  messagingSenderId: "297754543987",
  appId: "1:297754543987:web:22e60c765dea8cf5876706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
