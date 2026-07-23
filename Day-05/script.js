// ==========================================
// JavaScript Day 5
// Topic: Functions
// ==========================================

// Function Declaration
function greet() {
    console.log("Good Morning!");
}

greet();

// Function with Parameters
function welcome(name) {
    console.log("Welcome, " + name + "!");
}

welcome("Samhitha");

// Function with Return
function add(a, b) {
    return a + b;
}

let sum = add(15, 25);
console.log("Sum:", sum);

// Arrow Function
const square = (number) => {
    return number * number;
};

console.log("Square:", square(6));