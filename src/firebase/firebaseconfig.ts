import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCl-rx7xgTD9u2Ol_NUNDIE5bWNf63uV18",
  authDomain: "app-c34ef.firebaseapp.com",
  databaseURL: "https://app-c34ef-default-rtdb.firebaseio.com",
  projectId: "app-c34ef",
  storageBucket: "app-c34ef.appspot.com",
  messagingSenderId: "1071377722107",
  appId: "1:1071377722107:web:38af2a53a12c2151c51e5e"
};

export const app = initializeApp(firebaseConfig)