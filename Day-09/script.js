// ==========================================
// JavaScript Day 9
// Topic: Advanced String Methods
// ==========================================

// ------------------------------------------
// 1. charAt()
// ------------------------------------------

let language = "JavaScript";

console.log("First Character:", language.charAt(0));
console.log("Fifth Character:", language.charAt(4));
console.log("Last Character:", language.charAt(9));

// ------------------------------------------
// 2. indexOf()
// ------------------------------------------

let sentence = "Learning JavaScript";

console.log("Index of JavaScript:", sentence.indexOf("JavaScript"));
console.log("Index of a:", sentence.indexOf("a"));

// ------------------------------------------
// 3. lastIndexOf()
// ------------------------------------------

let fruit = "banana";

console.log("Last Index of a:", fruit.lastIndexOf("a"));

// ------------------------------------------
// 4. startsWith()
// ------------------------------------------

let subject = "JavaScript";

console.log("Starts with Java:", subject.startsWith("Java"));
console.log("Starts with Script:", subject.startsWith("Script"));

// ------------------------------------------
// 5. endsWith()
// ------------------------------------------

console.log("Ends with Script:", subject.endsWith("Script"));
console.log("Ends with Java:", subject.endsWith("Java"));

// ------------------------------------------
// 6. concat()
// ------------------------------------------

let firstName = "Samhitha";
let lastName = "Bhat";

console.log("Full Name:", firstName.concat(" ", lastName));

// ------------------------------------------
// 7. repeat()
// ------------------------------------------

let star = "*";

console.log("Five Stars:", star.repeat(5));

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let language1 = "JavaScript";

console.log(language1.charAt(0));
console.log(language1.charAt(5));

// Exercise 2

let sentence1 = "Learning JavaScript";

console.log(sentence1.indexOf("JavaScript"));
console.log(sentence1.indexOf("Learning"));

// Exercise 3

let fruit1 = "banana";

console.log(fruit1.lastIndexOf("a"));

// Exercise 4

let subject1 = "JavaScript";

console.log(subject1.startsWith("Java"));

// Exercise 5

console.log(subject1.endsWith("Script"));

// Exercise 6

let first = "Samhitha";
let last = "Bhat";

console.log(first.concat(" ", last));

// Exercise 7

let symbol = "*";

console.log(symbol.repeat(10));