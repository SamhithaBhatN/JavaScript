// ==========================================
// JavaScript Day 19
// Topic: Date & Time
// ==========================================

// ------------------------------------------
// 1. Create Current Date
// ------------------------------------------

let today = new Date();

console.log(today);

// ------------------------------------------
// 2. Current Year
// ------------------------------------------

console.log(today.getFullYear());

// ------------------------------------------
// 3. Current Month
// (0 = January, 11 = December)
// ------------------------------------------

console.log(today.getMonth());

// ------------------------------------------
// 4. Current Date
// ------------------------------------------

console.log(today.getDate());

// ------------------------------------------
// 5. Current Day
// (0 = Sunday, 6 = Saturday)
// ------------------------------------------

console.log(today.getDay());

// ------------------------------------------
// 6. Current Hour
// ------------------------------------------

console.log(today.getHours());

// ------------------------------------------
// 7. Current Minute
// ------------------------------------------

console.log(today.getMinutes());

// ------------------------------------------
// 8. Current Second
// ------------------------------------------

console.log(today.getSeconds());

// ------------------------------------------
// 9. Set Year
// ------------------------------------------

let customDate = new Date();

customDate.setFullYear(2035);

console.log(customDate);

// ------------------------------------------
// 10. Set Month
// ------------------------------------------

customDate.setMonth(0);

console.log(customDate);

// ------------------------------------------
// 11. Set Date
// ------------------------------------------

customDate.setDate(1);

console.log(customDate);

// ------------------------------------------
// 12. Date Formatting
// ------------------------------------------

console.log(today.toDateString());

console.log(today.toLocaleDateString());

console.log(today.toLocaleTimeString());

console.log(today.toISOString());

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let currentDate = new Date();

console.log(currentDate);

// Exercise 2

console.log(currentDate.getFullYear());

// Exercise 3

console.log(currentDate.getMonth());

// Exercise 4

console.log(currentDate.getDate());

// Exercise 5

console.log(currentDate.getDay());

// Exercise 6

console.log(currentDate.getHours());

// Exercise 7

console.log(currentDate.getMinutes());

// Exercise 8

console.log(currentDate.getSeconds());

// Exercise 9

let futureDate = new Date();

futureDate.setFullYear(2035);

console.log(futureDate);

// Exercise 10

futureDate.setMonth(0);

console.log(futureDate);

// Exercise 11

futureDate.setDate(1);

console.log(futureDate);

// Exercise 12

console.log(currentDate.toDateString());

console.log(currentDate.toLocaleDateString());

console.log(currentDate.toLocaleTimeString());

console.log(currentDate.toISOString());