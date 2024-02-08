import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIVyeovwQAeXX4gGEBBgYtYvFLOdP-ekU",
  authDomain: "ingrain-dealers.firebaseapp.com",
  projectId: "ingrain-dealers",
  storageBucket: "ingrain-dealers.appspot.com",
  messagingSenderId: "697703950409",
  appId: "1:697703950409:web:414c2e2e09e4c31598f798",
  measurementId: "G-74GCF0YYWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const db = getDatabase();
