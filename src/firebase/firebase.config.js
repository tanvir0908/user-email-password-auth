import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCon716AAFiWuBLiUiDidChlWo2RLcjtdY",
  authDomain: "user-email-password-auth-39e91.firebaseapp.com",
  projectId: "user-email-password-auth-39e91",
  storageBucket: "user-email-password-auth-39e91.appspot.com",
  messagingSenderId: "144906116669",
  appId: "1:144906116669:web:b874c361730575b2a19454",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
