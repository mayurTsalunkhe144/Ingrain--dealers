import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getDatabase,
  set,
  remove,
  ref,
  push,
  onValue,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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

const updateDealer = function (dealer_data) {
  set(ref(db, `dealers/${dealer_data.name}`), {
    name: dealer_data.name,
    phone: dealer_data.phone,
    gstin: dealer_data.GSTIN,
    address: dealer_data.address,
  }).then(alert("Dealer Added"));
};

const updateProduct = function (product_data) {
  set(ref(db, `products/${product_data.name}`), {
    product_data,
  }).then(alert("Product Added"));
};

const updateDealerList = function () {
  const dref = ref(db);
  get(child(dref, "dealers")).then((dealersl) => {
    dealersl.forEach((dealer) => {
      console.log(dealer);
      document.querySelector(
        "#select-dealer"
      ).innerHTML += `<option value="${dealer.key}">${dealer.key}</option>`;
    });
  });
};
export { updateDealer, updateProduct, updateDealerList };
