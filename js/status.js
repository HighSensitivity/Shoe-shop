window.addEventListener('DOMContentLoaded', (event) => {
  checkLoggedInUser();
  checkCartItems();
});

function checkLoggedInUser() {
  var user = localStorage.getItem("user");
  if (user) {
    showLoggedInUser(user);
  }
}

function checkCartPage() {
  if (window.location.pathname.includes('cart.html')) {
    var cartItems = localStorage.getItem("cartItems");
    if (!cartItems) {
      window.location.href = "index.html";
    }
  }
}

function showLoggedInUser(email) {
  document.getElementById("userNav").style.display = "none";
  document.getElementById("loggedInUserNav").style.display = "block";
  document.getElementById("loggedInUserEmail").textContent = "Hello, " + email;
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function clearItems() {
  localStorage.removeItem('cartItems');
  window.location.href = 'cart.html';
}

checkCartPage();