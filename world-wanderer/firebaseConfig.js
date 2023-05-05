import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByFeobxHzo6XbM2elfOKRv-SCyomnSleM",
  authDomain: "world-wanderer-50881.firebaseapp.com",
  projectId: "world-wanderer-50881",
  storageBucket: "world-wanderer-50881.appspot.com",
  messagingSenderId: "1009128618962",
  appId: "1:1009128618962:web:099bccdbf1d0faa175260b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
