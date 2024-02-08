import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getDatabase,
  set,
  remove,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

import * as product from "./Products.js";
import * as company from "./company.js.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIVyeovwQAeXX4gGEBBgYtYvFLOdP-ekU",
  authDomain: "ingrain-dealers.firebaseapp.com",
  databaseURL: "https://ingrain-dealers-default-rtdb.firebaseio.com",
  projectId: "ingrain-dealers",
  storageBucket: "ingrain-dealers.appspot.com",
  messagingSenderId: "697703950409",
  appId: "1:697703950409:web:414c2e2e09e4c31598f798",
  measurementId: "G-74GCF0YYWP",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
