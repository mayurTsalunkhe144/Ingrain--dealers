let product = {
  dealers: {},
  name: "",
  getProduct: function () {
    return {
      name: this.name,
      dealers: this.dealers,
    };
  },
  addDealer: function (dealerName, dealerPrice) {
    this.dealers[dealerName] = dealerPrice;
  },
};

const del_comp = (comp_name) => {
  delete product.comp_name;
  return `The ${comp_name} component has been deleted.`;
};

export { product };
