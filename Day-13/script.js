// ==========================================
// JavaScript Day 13
// Topic: DOM Events
// ==========================================

// ------------------------------------------
// 1. onclick
// ------------------------------------------

let button = document.getElementById("btn");

button.onclick = function () {
    alert("Button Clicked!");
};

// ------------------------------------------
// 2. ondblclick
// ------------------------------------------

button.ondblclick = function () {
    alert("Double Clicked!");
};

// ------------------------------------------
// 3. onmouseover
// ------------------------------------------

button.onmouseover = function () {
    button.style.backgroundColor = "green";
};

// ------------------------------------------
// 4. onmouseout
// ------------------------------------------

button.onmouseout = function () {
    button.style.backgroundColor = "";
};

// ------------------------------------------
// 5. onkeydown
// ------------------------------------------

let input = document.getElementById("name");

input.onkeydown = function () {
    console.log("Key Pressed");
};

// ------------------------------------------
// 6. onkeyup
// ------------------------------------------

input.onkeyup = function () {
    console.log(input.value);
};

// ------------------------------------------
// 7. addEventListener()
// ------------------------------------------

button.addEventListener("click", function () {
    alert("Button Clicked using addEventListener!");
});

// ------------------------------------------
// 8. Multiple Event Listeners
// ------------------------------------------

button.addEventListener("click", function () {
    console.log("First Event");
});

button.addEventListener("click", function () {
    console.log("Second Event");
});

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let button1 = document.getElementById("btn");

button1.onclick = function () {
    alert("Hello Samhitha!");
};

// Exercise 2

button1.ondblclick = function () {
    alert("Double Click Successful!");
};

// Exercise 3

button1.onmouseover = function () {
    button1.style.backgroundColor = "blue";
};

// Exercise 4

button1.onmouseout = function () {
    button1.style.backgroundColor = "";
};

// Exercise 5

let input1 = document.getElementById("name");

input1.onkeydown = function () {
    console.log("Typing...");
};

// Exercise 6

input1.onkeyup = function () {
    console.log(input1.value);
};

// Exercise 7

button1.addEventListener("click", function () {
    alert("Learning JavaScript Events");
});

// Exercise 8

button1.addEventListener("click", function () {
    console.log("First Event");
});

button1.addEventListener("click", function () {
    console.log("Second Event");
});