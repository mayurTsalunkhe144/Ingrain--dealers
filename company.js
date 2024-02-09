const company = {
  name: "",
  phone: 0,
  GSTIN: "",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
  },
};
function addCompanyDetails(dealer) {
  dealer.name = document.querySelector("#dealer-name").value;
  dealer.phone = document.querySelector("#dealer-Phone").value;
  dealer.GSTIN = document.querySelector("#dealer-GSTIN").value;
  dealer.address.street = document.querySelector("#dealer-street").value;
  dealer.address.city = document.querySelector("#dealer-city").value;
  dealer.address.state = document.querySelector("#dealer-state").value;
  dealer.address.zip = document.querySelector("#dealer-zip").value;
  return dealer;
}
export { company, addCompanyDetails };
