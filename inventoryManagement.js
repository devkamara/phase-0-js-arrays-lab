// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(product) {
  products.push(product);
}

function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;

function removeLastProduct() {
  products.pop();
  return products;
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
