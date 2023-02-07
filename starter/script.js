//Importing Module

//import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

console.log('importing Module');
//to import everything one

import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.totalPrice);
