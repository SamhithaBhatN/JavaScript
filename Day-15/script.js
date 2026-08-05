// ==========================================
// JavaScript Day 15
// Topic: ES6 Features (Part 1)
// ==========================================

// ------------------------------------------
// 1. let
// ------------------------------------------

let age = 21;

console.log(age);

age = 22;

console.log(age);

// ------------------------------------------
// 2. const
// ------------------------------------------

const country = "India";

console.log(country);

// ------------------------------------------
// 3. Template Literals
// ------------------------------------------

let name = "Samhitha";

console.log(`Welcome ${name}`);

// ------------------------------------------
// 4. Default Parameters
// ------------------------------------------

function greet(name = "Guest") {

    console.log(`Hello ${name}`);

}

greet();

greet("Samhitha");

// ------------------------------------------
// 5. Arrow Function
// ------------------------------------------

const multiply = (a, b) => {

    return a * b;

};

console.log(multiply(4, 5));

// ------------------------------------------
// 6. Array Destructuring
// ------------------------------------------

let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

// ------------------------------------------
// 7. Object Destructuring
// ------------------------------------------

let person = {

    name: "Rahul",
    age: 20,
    city: "Delhi"

};

let { name: personName, age: personAge, city } = person;

console.log(personName);
console.log(personAge);
console.log(city);

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let lang = "JavaScript";

console.log(lang);

// Exercise 2

const nation = "India";

console.log(nation);

// Exercise 3

let studentName = "Samhitha";

console.log(`Welcome ${studentName}`);

// Exercise 4

function greeting(name = "Guest") {

    console.log(`Hello ${name}`);

}

greeting();

greeting("Samhitha");

// Exercise 5

const multiplyNumbers = (a, b) => {

    return a * b;

};

console.log(multiplyNumbers(4, 5));

// Exercise 6

let colors = ["Apple", "Banana", "Mango"];

let [fruit1, fruit2, fruit3] = colors;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// Exercise 7

let employee = {

    name: "Rahul",
    age: 20,
    city: "Delhi"

};

let { name, age, city: employeeCity } = employee;

console.log(name);
console.log(age);
console.log(employeeCity);