var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item,
            itemPrice: Math.floor( Math.random())});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var report = "In your cart, you have";
  for (let i = 0; i < cart.length; i++) {
    let interpolated = (i < cart.length - 1) ? ',' : '.';
    report += ` ${cart[i].itemName} at ${cart[i].itemPrice}${interpolated}`;
  }
  return report;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
