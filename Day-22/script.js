// ==========================================
// JavaScript Day 22
// Topic: Promises & Asynchronous JavaScript
// ==========================================


// ------------------------------------------
// 1. Synchronous JavaScript
// ------------------------------------------

console.log("First");
console.log("Second");
console.log("Third");


// ------------------------------------------
// 2. Basic setTimeout()
// ------------------------------------------

console.log("Start");

setTimeout(function () {
    console.log("Hello Samhitha");
}, 2000);

console.log("End");


// ------------------------------------------
// 3. Multiple Timers
// ------------------------------------------

console.log("Start");

setTimeout(function () {
    console.log("Message 1");
}, 3000);

setTimeout(function () {
    console.log("Message 2");
}, 1000);

console.log("End");