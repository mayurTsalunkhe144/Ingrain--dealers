import * as product from "./Products.js";
import * as dealer from "./company.js";
import * as firebase from "./firebase-modules.js";

const dealer_save = document.querySelector("#save-dealer-btn");
let dealer_data = dealer.company;
dealer_save.addEventListener("click", () => {
  dealer_data = dealer.addCompanyDetails(dealer_data);
  firebase.updateDealer(dealer_data);
});

document.querySelector("#add-product-nav").addEventListener("click", () => {
  firebase.updateDealerList();
});
