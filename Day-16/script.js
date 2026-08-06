// ==========================================
// JavaScript Day 16
// Topic: ES6 Features (Part 2)
// ==========================================

// ------------------------------------------
// 1. Spread Operator
// ------------------------------------------

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let mergedNumbers = [...numbers1, ...numbers2];

console.log(mergedNumbers);

// Copy an Array

let fruits = ["Apple", "Banana", "Mango"];

let copiedFruits = [...fruits];

console.log(copiedFruits);

// ------------------------------------------
// 2. Rest Parameters
// ------------------------------------------

function sum(...numbers) {

    let total = 0;

    for (let number of numbers) {

        total += number;

    }

    return total;

}

console.log(sum(5, 10, 15));

// ------------------------------------------
// 3. Enhanced Object Literals
// ------------------------------------------

let name = "Rahul";
let age = 20;

let student = {

    name,
    age

};

console.log(student);

// ------------------------------------------
// 4. Optional Chaining
// ------------------------------------------

let person = {

    name: "Rahul"

};

console.log(person.address?.city);

// ------------------------------------------
// 5. Nullish Coalescing
// ------------------------------------------

let username = null;

console.log(username ?? "Guest");

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

let mergedArray = [...num1, ...num2];

console.log(mergedArray);

// Exercise 2

let fruitList = ["Apple", "Banana", "Mango"];

let copiedList = [...fruitList];

console.log(copiedList);

// Exercise 3

function addNumbers(...numbers) {

    let total = 0;

    for (let number of numbers) {

        total += number;

    }

    return total;

}

console.log(addNumbers(5, 10, 15));

// Exercise 4

let studentName = "Rahul";
let studentAge = 20;

let studentInfo = {

    studentName,
    studentAge

};

console.log(studentInfo);

// Exercise 5

let employee = {

    name: "Rahul"

};

console.log(employee.address?.city);

// Exercise 6

let loginUser = null;

console.log(loginUser ?? "Guest");