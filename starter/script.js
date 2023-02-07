//Importing Module

//import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

console.log('importing Module');
//to import everything one

// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 6);
add('Apple', 8);

console.log(cart);

//TOP LEVEL AWAIT
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('fetch something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  //get the last title and body text
  return { title: data.at(-1).title, text: data.at(-1).body };
};
//store the get element in to a variable
const lastPost = getLastPost();
console.log(lastPost); //at this point it can only return a promise

//we deploy a high level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
