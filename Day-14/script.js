// ==========================================
// JavaScript Day 14
// Topic: Forms & Input Validation
// ==========================================

// ------------------------------------------
// 1. Reading Input Value
// ------------------------------------------

let username = document.getElementById("username");

console.log(username.value);

// ------------------------------------------
// 2. Button Click
// ------------------------------------------

let button = document.getElementById("btn");

button.onclick = function () {

    console.log("Username:", username.value);

};

// ------------------------------------------
// 3. Empty Validation
// ------------------------------------------

if (username.value === "") {

    alert("Username is required");

}

// ------------------------------------------
// 4. Password Validation
// ------------------------------------------

let password = document.getElementById("password");

if (password.value.length < 8) {

    alert("Password must contain at least 8 characters");

}

// ------------------------------------------
// 5. Success Message
// ------------------------------------------

let message = document.getElementById("message");

message.textContent = "Login Successful!";

// ------------------------------------------
// 6. Error Message
// ------------------------------------------

message.textContent = "Invalid Username";

// ------------------------------------------
// 7. Number Validation
// ------------------------------------------

let age = 18;

if (age >= 18) {

    console.log("Eligible");

}
else {

    console.log("Not Eligible");

}

// ------------------------------------------
// 8. Prevent Form Submission
// ------------------------------------------

let form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

});

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let username1 = document.getElementById("username");

console.log(username1.value);

// Exercise 2

let button1 = document.getElementById("btn");
let password1 = document.getElementById("password");

button1.onclick = function () {

    console.log("Username:", username1.value);
    console.log("Password:", password1.value);

};

// Exercise 3

if (username1.value === "") {

    alert("Username is required");

}

// Exercise 4

if (password1.value.length < 8) {

    alert("Password must be at least 8 characters");

}

// Exercise 5

let message1 = document.getElementById("message");

message1.textContent = "Login Successful!";

// Exercise 6

message1.textContent = "Invalid Username";

// Exercise 7

let age1 = 20;

if (age1 >= 18) {

    console.log("Eligible");

}
else {

    console.log("Not Eligible");

}

// Exercise 8

let form1 = document.getElementById("loginForm");

form1.addEventListener("submit", function (event) {

    event.preventDefault();

});