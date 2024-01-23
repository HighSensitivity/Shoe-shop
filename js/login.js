 function createAccount() {
        // Get input values
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        // Check if email is already taken
        var existingEmail = localStorage.getItem(email);
        if (existingEmail) {
          alert("Email is already taken. Please enter a different email.");
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          document.getElementById("confirmPassword").value = "";
          document.getElementById("email").focus();
          return false;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
          alert("Passwords do not match. Please enter matching passwords.");
          document.getElementById("password").value = "";
          document.getElementById("confirmPassword").value = "";
          document.getElementById("password").focus();
          return false;
        }

        // Store account details in localStorage
        localStorage.setItem(email, password);
        localStorage.setItem("name", name);
        localStorage.setItem("address", address);
        localStorage.setItem("phone", phone);

        alert("Account created successfully!");

        // Redirect to login.html
        window.location.href = "login.html";

        return false;
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
