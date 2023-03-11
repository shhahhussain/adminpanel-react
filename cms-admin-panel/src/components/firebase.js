import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBQ0niFaQPQxlSqAvH_mG77bSN8jmMu7bw",
  authDomain: "c-m-s-5712c.firebaseapp.com",
  databaseURL: "https://c-m-s-5712c-default-rtdb.firebaseio.com",
  projectId: "c-m-s-5712c",
  storageBucket: "c-m-s-5712c.appspot.com",
  messagingSenderId: "528139136103",
  appId: "1:528139136103:web:8921cd8d712db5d659b8c2",
  measurementId: "G-21Z98BK5WJ"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const database = getDatabase(app);
export const refData=ref(database,'/')