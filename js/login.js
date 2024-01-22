function createAccount() {
  var name = document.getElementsByName("name")[0].value;
  var address = document.getElementsByName("address")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var phone = document.getElementsByName("phone")[0].value;
  var password = document.getElementsByName("password")[0].value;
  var confirmPassword = document.getElementsByName("confirmPassword")[0].value;
  var valid = true;

  if (localStorage.getItem(email) !== null) {
    alert("Email is already taken. Please enter a different one");
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("password")[0].value = "";
    document.getElementsByName("confirmPassword")[0].value = "";
    document.getElementsByName("email")[0].focus();
    valid = false;
  } else if (password !== confirmPassword) {
    alert("Passwords do not match. Please enter matching passwords");
    document.getElementsByName("password")[0].value = "";
    document.getElementsByName("confirmPassword")[0].value = "";
    document.getElementsByName("password")[0].focus();
    valid = false;
  } else {
    localStorage.setItem(email, password.toString());
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    alert("Account Created");
    window.location.href = "path/to/login.html";
  }

  return valid;
}


function login() {
    var username = document.getElementsByName("uname")[0].value;
    var password = document.getElementsByName("pwd")[0].value;

    var valid = false;

    if (localStorage.getItem(username) !== null) {
        var savedPassword = localStorage.getItem(username);
        if (savedPassword === password) {
            valid = true;
            localStorage.setItem("user", username);
            alert("Login successful!");
        } else {
            alert("Please check username and password and try again");
            document.getElementsByName("uname")[0].value = "";
            document.getElementsByName("pwd")[0].value = "";
            document.getElementsByName("uname")[0].focus();
        }
    } else {
        alert("Username does not exist");
    }

    if (!valid) {
        window.location.href = "login.html";
    } else {
        window.location.href = "index.html";
    }
}
