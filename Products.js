const product = {
  dealers: {},
  name: "",
};
export function add_comp(comp_name, price) {
  product.dealers.comp_name = price;
}

const del_comp = (comp_name) => {
  delete product.comp_name;
};

export { del_comp, product };
