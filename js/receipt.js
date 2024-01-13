document.addEventListener('DOMContentLoaded', function() {
  var user = localStorage.getItem('user');
  var name = localStorage.getItem('name');
  var phone = localStorage.getItem('phone');
  var address = localStorage.getItem('address');
  var totalItems = localStorage.getItem('totalItems');
  var cartItems = localStorage.getItem('cartItems');
  var tax = localStorage.getItem('tax');
  var totalSum = localStorage.getItem('totalSum');

  document.getElementById('user').textContent = user;
  document.getElementById('name').textContent = name;
  document.getElementById('phone').textContent = phone;
  document.getElementById('address').textContent = address;
  document.getElementById('totalItems').textContent = totalItems;
  document.getElementById('cartItems').textContent = cartItems;
  document.getElementById('tax').textContent = tax;
  document.getElementById('total').textContent = totalSum;

  localStorage.setItem('name', name);
  localStorage.setItem('phone', phone);
  localStorage.setItem('address', address);
  localStorage.setItem('tax', tax);
  localStorage.setItem('totalSum', totalSum);

});

  function inv() {
    let invoiceNumber = Math.floor(10000 + Math.random() * 90000);
    return invoiceNumber;
  }

  function date() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  document.getElementById('inv').textContent = inv();
  document.getElementById('date').textContent = date();