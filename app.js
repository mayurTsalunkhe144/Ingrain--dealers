import * as product from "./Products.js";
import * as dealer from "./company.js";
import * as firebase from "./firebase-modules.js";

const dealer_save = document.querySelector("#save-dealer-btn");
const newDealer = dealer.company;

const newProduct = product.product;

let Product;
let Dealer;

dealer_save.addEventListener("click", () => {
  newDealer.setDealer(
    document.querySelector("#dealer-name").value,
    document.querySelector("#dealer-Phone").value,
    document.querySelector("#dealer-GSTIN").value,
    document.querySelector("#dealer-city").value,
    document.querySelector("#dealer-street").value,
    document.querySelector("#dealer-state").value,
    document.querySelector("#dealer-zip").value
  );
  firebase.updateDealer(newDealer.getDealer());
});

window.addEventListener("load", () => {
  firebase.getDealerList();
  firebase.updateSearchProduct();
  // dealerList.forEach((dealer) => {
  //   console.log(dealer.key);
  // });
});

document.querySelector("#search-btn").addEventListener("click", () => {
  firebase.showSearchedData();
});

document
  .querySelector("#add-dealer-modal-btn")
  .addEventListener("click", () => {
    document.querySelector("#save-dealer").innerHTML = "";
    let selected_dealer = document.querySelector("#modal-select-dealer").value;
    let price = document.querySelector("#dealer-price-modal").value;
    if (selected_dealer == "none" || price == 0.0 || 0) {
      alert("Please select a Dealer and enter the Price");
    } else {
      newProduct.name = newProduct.addDealer(selected_dealer, price);
      updateList();
    }
  });
function updateList() {
  Object.keys(newProduct.dealers).forEach((dealer) => {
    console.log(`${dealer}:${newProduct.dealers[dealer]}`);
    document.querySelector(
      "#save-dealer"
    ).innerHTML += `<option value="${dealer}">${dealer} : ${newProduct.dealers[dealer]}</option>`;
  });
}

document.querySelector("#save-dealer-list").addEventListener("click", () => {
  let name = document.querySelector("#product-name").value;
  newProduct.name = name;
  if (name == "") {
    alert("please enter the product name");
  } else {
    console.log(newProduct.getProduct());
    firebase.updateProduct(newProduct.getProduct());
  }
});
