//Exporting Module

console.log('Exporting module');

//Blocking code
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finished fetching user');
//

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 276;
const totalQuantity = 24;
export { totalPrice, totalQuantity };

//default export is used when we want to export one thing per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
