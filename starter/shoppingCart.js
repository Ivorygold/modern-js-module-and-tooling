//Exporting Module

console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 276;
const totalQuantity = 24;
export { totalPrice, totalQuantity };

//default export
export default