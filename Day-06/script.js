// ==========================================
// JavaScript Day 6
// Topic: Arrays
// ==========================================

// Creating an Array
let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

// Accessing Elements
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);

// Updating an Element
fruits[1] = "Orange";
console.log("Updated Array:", fruits);

// Length
console.log("Length:", fruits.length);

// Push
fruits.push("Grapes");
console.log("After Push:", fruits);

// Pop
fruits.pop();
console.log("After Pop:", fruits);

// Shift
fruits.shift();
console.log("After Shift:", fruits);

// Unshift
fruits.unshift("Apple");
console.log("After Unshift:", fruits);

// Loop through Array
console.log("All Fruits:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}