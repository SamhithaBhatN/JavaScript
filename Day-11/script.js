// ==========================================
// JavaScript Day 11
// Topic: DOM Introduction
// ==========================================

// ------------------------------------------
// 1. Selecting an Element
// ------------------------------------------

let heading = document.getElementById("heading");

console.log(heading);

// ------------------------------------------
// 2. Changing Heading Text
// ------------------------------------------

heading.textContent = "Welcome Samhitha";

// ------------------------------------------
// 3. Changing Paragraph Text
// ------------------------------------------

let paragraph = document.getElementById("paragraph");

paragraph.textContent = "Learning JavaScript DOM";

// ------------------------------------------
// 4. Changing Styles
// ------------------------------------------

heading.style.color = "red";
heading.style.fontSize = "50px";

paragraph.style.color = "green";
paragraph.style.fontSize = "22px";

// ------------------------------------------
// 5. Button Click Event
// ------------------------------------------

let button = document.getElementById("btn");

button.onclick = function () {
    alert("Welcome to JavaScript!");
};

// ------------------------------------------
// 6. Change Heading After Button Click
// ------------------------------------------

button.onclick = function () {
    heading.textContent = "JavaScript DOM is Awesome!";
};

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let heading1 = document.getElementById("heading");

console.log(heading1);

// Exercise 2

heading1.textContent = "Hello Samhitha";

// Exercise 3

let paragraph1 = document.getElementById("paragraph");

paragraph1.textContent = "Learning JavaScript DOM";

// Exercise 4

heading1.style.color = "red";
heading1.style.fontSize = "50px";

// Exercise 5

let button1 = document.getElementById("btn");

button1.onclick = function () {
    alert("Welcome to JavaScript!");
};

// Exercise 6

button1.onclick = function () {
    heading1.textContent = "JavaScript DOM is Awesome!";
};