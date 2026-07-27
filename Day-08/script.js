// ==========================================
// JavaScript Day 8
// Topic: Strings
// ==========================================

// ------------------------------------------
// 1. Creating Strings
// ------------------------------------------

let name = "Samhitha";
let city = "Mangaluru";
let course = "JavaScript";

console.log("Name:", name);
console.log("City:", city);
console.log("Course:", course);

// ------------------------------------------
// 2. String Length
// ------------------------------------------

let language = "JavaScript";

console.log("Length:", language.length);

// ------------------------------------------
// 3. toUpperCase()
// ------------------------------------------

let text1 = "javascript";

console.log("Uppercase:", text1.toUpperCase());

// ------------------------------------------
// 4. toLowerCase()
// ------------------------------------------

let text2 = "MANGALURU";

console.log("Lowercase:", text2.toLowerCase());

// ------------------------------------------
// 5. trim()
// ------------------------------------------

let message = "   Hello World   ";

console.log("Trimmed:", message.trim());

// ------------------------------------------
// 6. slice()
// ------------------------------------------

let subject = "JavaScript";

console.log("First 4 Characters:", subject.slice(0, 4));
console.log("Remaining Characters:", subject.slice(4));

// ------------------------------------------
// 7. replace()
// ------------------------------------------

let sentence = "I love Python";

console.log(sentence.replace("Python", "JavaScript"));

// ------------------------------------------
// 8. includes()
// ------------------------------------------

let learning = "Learning JavaScript";

console.log(learning.includes("JavaScript"));
console.log(learning.includes("Python"));

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let studentName = "Samhitha";

console.log(studentName);
console.log(studentName.length);

// Exercise 2

let languageName = "javascript";

console.log(languageName.toUpperCase());

// Exercise 3

let studentCity = "MANGALURU";

console.log(studentCity.toLowerCase());

// Exercise 4

let greeting = "   Hello World   ";

console.log(greeting.trim());

// Exercise 5

let courseName = "JavaScript";

console.log(courseName.slice(0, 4));
console.log(courseName.slice(4));

// Exercise 6

let sentence2 = "I love Python";

console.log(sentence2.replace("Python", "JavaScript"));

// Exercise 7

let sentence3 = "Learning JavaScript";

console.log(sentence3.includes("JavaScript"));