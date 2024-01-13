function checkUserLoggedIn() {
  var user = localStorage.getItem('user');

  if (!user) {
    alert('You are not logged in, try again!');
    return false;
  }

  return true;
}

function addToCart(itemId, price) {
  var stockList = ["Air Jordan 4's (Thunder)", "Air Jordan 8's (Playoffs)", "Air Jordan 13's (Wolf Grey)", "Undefeated x Nike Air Force", "Air Jordan 1 Mid Panda Elephant", "Air Jordan 1 High OG Royal Reimagined"];

  if (!checkUserLoggedIn()) {
    return;
  }

  let cartItems = localStorage.getItem('cartItems');

  cartItems = cartItems ? JSON.parse(cartItems) : [];

  let itemName = stockList[itemId - 1];

  let item = {
    name: itemName,
    price: price
  };

  cartItems.push(item);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  alert('Item "' + itemName + '" added to cart.');

  window.location.href = 'cart.html';
}

function displayCartItems() {
  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  let cartItemsDisplay = document.getElementById('cartItemsDisplay');
  cartItemsDisplay.innerHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    let itemName = cartItems[i].name;
    let itemPrice = cartItems[i].price;

    let row = document.createElement('tr');

    let nameCell = document.createElement('td');
    nameCell.textContent = itemName;
    row.appendChild(nameCell);

    let priceCell = document.createElement('td');
    priceCell.textContent = '$' + itemPrice;
    row.appendChild(priceCell);

    cartItemsDisplay.appendChild(row);
  }

  if (cartItems.length === 0) {
    let emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = 'Your cart is empty.';
    cartItemsDisplay.appendChild(emptyCartMessage);
  }
}

function calculateTotalSum(cartItems) {
  let totalSum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let itemPrice = parseFloat(cartItems[i].price);
    totalSum += itemPrice;
  }
  return totalSum;
}

function updateSummary() {
  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  let subtotalElement = document.getElementById('subtotal');
  let totalItemsElement = document.getElementById('totalItems');
  let totalElement = document.getElementById('total');

  let totalSum = calculateTotalSum(cartItems);
  let tax = 8.50;

  if (isNaN(totalSum)) {
    totalSum = 0;
  }

  let subtotal = totalSum.toFixed(2);
  let totalSumWithTax = (totalSum + tax).toFixed(2);
  let totalItems = cartItems.length;

  subtotalElement.textContent = '$' + subtotal;
  totalItemsElement.textContent = totalItems;
  totalElement.textContent = '$' + totalSumWithTax;

  localStorage.setItem('subTotal', subtotal);
  localStorage.setItem('totalSum', totalSumWithTax);
  localStorage.setItem('tax', tax);
  localStorage.setItem('totalItems', totalItems);
}

displayCartItems();
updateSummary();