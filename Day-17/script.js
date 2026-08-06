// ==========================================
// JavaScript Day 17
// Topic: Advanced Array Methods
// ==========================================

// ------------------------------------------
// 1. forEach()
// ------------------------------------------

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit) {
    console.log(fruit);
});

// ------------------------------------------
// 2. map()
// ------------------------------------------

let numbers = [2, 4, 6];

let doubledNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log(doubledNumbers);

// ------------------------------------------
// 3. filter()
// ------------------------------------------

let values = [5, 10, 15, 20];

let greaterThanTen = values.filter(function (number) {
    return number > 10;
});

console.log(greaterThanTen);

// ------------------------------------------
// 4. find()
// ------------------------------------------

let data = [20, 40, 60, 80];

let firstGreaterThanFifty = data.find(function (number) {
    return number > 50;
});

console.log(firstGreaterThanFifty);

// ------------------------------------------
// 5. findIndex()
// ------------------------------------------

let marks = [5, 10, 15, 60];

let index = marks.findIndex(function (number) {
    return number === 60;
});

console.log(index);

// ------------------------------------------
// 6. some()
// ------------------------------------------

let temperatures = [5, 10, -2, 8];

let hasNegative = temperatures.some(function (number) {
    return number < 0;
});

console.log(hasNegative);

// ------------------------------------------
// 7. every()
// ------------------------------------------

let evenNumbers = [2, 4, 6, 8];

let allEven = evenNumbers.every(function (number) {
    return number % 2 === 0;
});

console.log(allEven);

// ------------------------------------------
// 8. reduce()
// ------------------------------------------

let prices = [10, 20, 30, 40];

let total = prices.reduce(function (sum, number) {
    return sum + number;
}, 0);

console.log(total);

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let fruitsList = ["Apple", "Banana", "Mango"];

fruitsList.forEach(function (fruit) {
    console.log(fruit);
});

// Exercise 2

let nums = [2, 4, 6];

let doubles = nums.map(function (number) {
    return number * 2;
});

console.log(doubles);

// Exercise 3

let list = [5, 10, 15, 20];

let greater = list.filter(function (number) {
    return number > 10;
});

console.log(greater);

// Exercise 4

let array = [20, 40, 60, 80];

let result = array.find(function (number) {
    return number > 50;
});

console.log(result);

// Exercise 5

let array2 = [5, 10, 15, 60];

let resultIndex = array2.findIndex(function (number) {
    return number === 60;
});

console.log(resultIndex);

// Exercise 6

let array3 = [5, 10, -2, 8];

let negative = array3.some(function (number) {
    return number < 0;
});

console.log(negative);

// Exercise 7

let array4 = [2, 4, 6, 8];

let everyEven = array4.every(function (number) {
    return number % 2 === 0;
});

console.log(everyEven);

// Exercise 8

let array5 = [10, 20, 30, 40];

let sum = array5.reduce(function (total, number) {
    return total + number;
}, 0);

console.log(sum);