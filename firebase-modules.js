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
  set(ref(db, `dealers/${dealer_data.name}`), dealer_data).then(
    alert("Dealer Added")
  );
};

const updateProduct = function (product_data) {
  console.log(product_data);
  set(ref(db, `products/${product_data.name}`), product_data).then(
    alert("Product Added")
  );
};

const getDealerList = function () {
  //
  const dref = ref(db);
  get(child(dref, "dealers")).then((dealersl) => {
    dealersl.forEach((dealer) => {
      document.querySelector(
        "#modal-select-dealer"
      ).innerHTML += `<option value="${dealer.key}">${dealer.key}</option>;`;
    });
  });
};

function getProductList() {
  let productList = [];
  const dref = ref(db);
  get(child(dref, "products")).then((productlist) => {
    productlist.forEach((product) => {
      productList.push(product.key);
    });
  });
  return productList;
}

function updateSearchProduct() {
  const dref = ref(db);
  get(child(dref, "products")).then((productlist) => {
    productlist.forEach((product) => {
      document.querySelector(
        "#select-product"
      ).innerHTML += `<option value="${product.key}">${product.key}</option>`;
    });
  });
}
function showSearchedData() {
  document.querySelector("#show-data").innerHTML = "";
  const dref = ref(db);
  get(child(dref, "products")).then((productlist) => {
    productlist.forEach((product) => {
      if (document.querySelector("#select-product").value == product.key) {
        const productDealers = product.val().dealers;
        for (const key in productDealers) {
          console.log(`${key}:${productDealers[key]}`);

          get(child(dref, "dealers")).then((dealersl) => {
            dealersl.forEach((dealer) => {
              if (key == dealer.key) {
                // showing data  to the page
                document.querySelector(
                  "#show-data"
                ).innerHTML += `<div class="col">
              <div class="card">
              <div class="card-body">
                <h5 class="card-title">Dealer :${key} <br>Price :${
                  productDealers[key]
                }</h5>
                <p class="card-text">
                <strong>Name:</strong><span>${dealer.val().name}</span><br>
                 <strong>Phone:</strong><span>${dealer.val().phone}</span><br>
                  <strong>GSTIN:</strong><span>${dealer.val().GSTIN}</span><br>
                   <strong>City:</strong><span>${dealer.val().street}</span><br>
                    <strong>Street:</strong><span>${
                      dealer.val().city
                    }</span><br>
                     <strong>state:</strong><span>${
                       dealer.val().state
                     }</span><br>
                     <strong>zip:</strong><span>${dealer.val().zip}</span>
                </p>
              </div>
            </div>
          </div>
        `;
              }
            });
          });
        }

        //       Object.entries(product.val().dealers).forEach((key) => {
        // document.querySelector("#show-data").innerHTML += `<div class="col">
        //       <div class="card">
        //       <div class="card-body">
        //         <h5 class="card-title">${product.val().dealers[key]}</h5>
        //         <p class="card-text"></p>
        //       </div>
        //     </div>
        //   </div>
        // `;
        //       });
      }
    });
  });
}

export {
  updateDealer,
  updateProduct,
  getDealerList,
  getProductList,
  updateSearchProduct,
  showSearchedData,
};
