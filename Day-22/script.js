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


// ------------------------------------------
// 4. Creating a Promise
// ------------------------------------------

let promise1 = new Promise(function (resolve, reject) {

    resolve("Promise successful");

});

console.log(promise1);


// ------------------------------------------
// 5. Promise with .then()
// ------------------------------------------

let promise2 = new Promise(function (resolve, reject) {

    resolve("Promise successful");

});

promise2.then(function (result) {

    console.log(result);

});


// ------------------------------------------
// 6. Promise Rejection with .catch()
// ------------------------------------------

let promise3 = new Promise(function (resolve, reject) {

    reject("Promise failed");

});

promise3.catch(function (error) {

    console.log(error);

});


// ------------------------------------------
// 7. Promise with setTimeout()
// ------------------------------------------

let promise4 = new Promise(function (resolve, reject) {

    setTimeout(function () {

        resolve("Promise completed");

    }, 2000);

});

promise4.then(function (result) {

    console.log(result);

});


// ------------------------------------------
// 8. Promise with Success and Failure
// ------------------------------------------

let success = true;

let promise5 = new Promise(function (resolve, reject) {

    setTimeout(function () {

        if (success) {
            resolve("Data loaded successfully");
        }
        else {
            reject("Failed to load data");
        }

    }, 2000);

});

promise5
    .then(function (result) {

        console.log(result);

    })
    .catch(function (error) {

        console.log(error);

    });


// ------------------------------------------
// 9. Promise with .finally()
// ------------------------------------------

let promise6 = new Promise(function (resolve, reject) {

    reject("Something went wrong");

});

promise6
    .then(function (result) {

        console.log(result);

    })
    .catch(function (error) {

        console.log(error);

    })
    .finally(function () {

        console.log("Operation finished");

    });


// ------------------------------------------
// 10. Final Practical Challenge
// ------------------------------------------

let isLoaded = true;

let promise7 = new Promise(function (resolve, reject) {

    setTimeout(function () {

        if (isLoaded) {
            resolve("Website loaded successfully");
        }
        else {
            reject("Website failed to load");
        }

    }, 2000);

});

promise7
    .then(function (result) {

        console.log(result);

    })
    .catch(function (error) {

        console.log(error);

    })
    .finally(function () {

        console.log("Loading process finished");

    });