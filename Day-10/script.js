// ==========================================
// JavaScript Day 10
// Topic: Math & Number Methods
// ==========================================

// ------------------------------------------
// 1. toString()
// ------------------------------------------

let number = 100;

console.log("Number:", number);
console.log("String:", number.toString());
console.log("Type:", typeof number.toString());

// ------------------------------------------
// 2. toFixed()
// ------------------------------------------

let price = 123.4567;

console.log("Original Price:", price);
console.log("2 Decimal Places:", price.toFixed(2));
console.log("1 Decimal Place:", price.toFixed(1));

// ------------------------------------------
// 3. parseInt()
// ------------------------------------------

let num = "250";

console.log("String:", num);
console.log("Integer:", parseInt(num));

// ------------------------------------------
// 4. parseFloat()
// ------------------------------------------

let value = "45.89";

console.log("String:", value);
console.log("Float:", parseFloat(value));

// ------------------------------------------
// 5. Number()
// ------------------------------------------

console.log("Number('100'):", Number("100"));
console.log("Number(true):", Number(true));
console.log("Number(false):", Number(false));

// ------------------------------------------
// 6. Math.round()
// ------------------------------------------

console.log("Math.round(4.4):", Math.round(4.4));
console.log("Math.round(4.5):", Math.round(4.5));

// ------------------------------------------
// 7. Math.floor()
// ------------------------------------------

console.log("Math.floor(7.9):", Math.floor(7.9));

// ------------------------------------------
// 8. Math.ceil()
// ------------------------------------------

console.log("Math.ceil(7.1):", Math.ceil(7.1));

// ------------------------------------------
// 9. Math.trunc()
// ------------------------------------------

console.log("Math.trunc(9.87):", Math.trunc(9.87));

// ------------------------------------------
// 10. Math.abs()
// ------------------------------------------

console.log("Math.abs(-25):", Math.abs(-25));

// ------------------------------------------
// 11. Math.pow()
// ------------------------------------------

console.log("2 Power 5:", Math.pow(2, 5));

// ------------------------------------------
// 12. Math.sqrt()
// ------------------------------------------

console.log("Square Root of 81:", Math.sqrt(81));

// ------------------------------------------
// 13. Math.max() & Math.min()
// ------------------------------------------

console.log("Maximum:", Math.max(5, 18, 9, 21));
console.log("Minimum:", Math.min(5, 18, 9, 21));

// ------------------------------------------
// 14. Math.random()
// ------------------------------------------

console.log("Random Decimal:", Math.random());

console.log(
    "Random Integer (1-10):",
    Math.floor(Math.random() * 10) + 1
);

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let number1 = 250;

console.log(number1.toString());
console.log(typeof number1.toString());

// Exercise 2

let price1 = 99.9876;

console.log(price1.toFixed(2));

// Exercise 3

let value1 = "500";

console.log(parseInt(value1));

// Exercise 4

let decimal = "25.75";

console.log(parseFloat(decimal));

// Exercise 5

console.log(Math.round(6.7));
console.log(Math.floor(6.7));
console.log(Math.ceil(6.2));
console.log(Math.trunc(6.9));

// Exercise 6

console.log(Math.sqrt(144));
console.log(Math.pow(3, 4));

// Exercise 7

console.log(Math.max(45, 87, 23, 91));
console.log(Math.min(45, 87, 23, 91));

// Exercise 8

console.log(Math.floor(Math.random() * 100) + 1);