// ==========================================
// JavaScript Day 12
// Topic: DOM Manipulation
// ==========================================

// ------------------------------------------
// 1. getElementsByTagName()
// ------------------------------------------

let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// ------------------------------------------
// 2. getElementsByClassName()
// ------------------------------------------

let textElements = document.getElementsByClassName("text");

console.log(textElements);

// ------------------------------------------
// 3. querySelector()
// ------------------------------------------

let heading = document.querySelector("#heading");

console.log(heading);

// ------------------------------------------
// 4. querySelectorAll()
// ------------------------------------------

let allParagraphs = document.querySelectorAll(".text");

console.log(allParagraphs);

// ------------------------------------------
// 5. innerText
// ------------------------------------------

heading.innerText = "Learning DOM Manipulation";

// ------------------------------------------
// 6. innerHTML
// ------------------------------------------

heading.innerHTML = "<i>Learning JavaScript</i>";

// ------------------------------------------
// 7. classList.add()
// ------------------------------------------

heading.classList.add("highlight");

// ------------------------------------------
// 8. classList.remove()
// ------------------------------------------

heading.classList.remove("highlight");

// ------------------------------------------
// 9. classList.toggle()
// ------------------------------------------

heading.classList.toggle("highlight");

// ------------------------------------------
// 10. Button Click Event
// ------------------------------------------

let button = document.getElementById("btn");

button.onclick = function () {
    heading.classList.toggle("highlight");
};

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let paragraphList = document.getElementsByTagName("p");

console.log(paragraphList);

// Exercise 2

let classElements = document.getElementsByClassName("text");

console.log(classElements);

// Exercise 3

let heading1 = document.querySelector("#heading");

console.log(heading1);

// Exercise 4

let paragraphItems = document.querySelectorAll(".text");

console.log(paragraphItems);

// Exercise 5

heading1.innerText = "JavaScript is Awesome!";

// Exercise 6

heading1.innerHTML = "<b>Learning DOM</b>";

// Exercise 7

heading1.classList.add("highlight");

// Exercise 8

heading1.classList.remove("highlight");

// Exercise 9

let button1 = document.getElementById("btn");

button1.onclick = function () {
    heading1.classList.toggle("highlight");
};