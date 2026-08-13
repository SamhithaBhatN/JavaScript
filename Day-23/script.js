// ==========================================
// JavaScript Day 23
// Topic: Async / Await & Fetch API
// ==========================================


// ------------------------------------------
// 1. Basic async function
// ------------------------------------------

async function greet() {

    return "Hello Samhitha";

}

greet().then(function(result) {

    console.log(result);

});


// ------------------------------------------
// 2. await with Promise
// ------------------------------------------

let promise = new Promise(function(resolve, reject) {

    setTimeout(function() {

        resolve("Data received");

    }, 2000);

});

async function getData() {

    let result = await promise;

    console.log(result);

}

getData();


// ------------------------------------------
// 3. async/await with try...catch
// ------------------------------------------

let failedPromise = new Promise(function(resolve, reject) {

    setTimeout(function() {

        reject("Failed to load data");

    }, 2000);

});

async function loadFailedData() {

    try {

        let result = await failedPromise;

        console.log(result);

    }
    catch (error) {

        console.log(error);

    }

}

loadFailedData();


// ------------------------------------------
// 4. Successful async/await operation
// ------------------------------------------

let successPromise = new Promise(function(resolve, reject) {

    setTimeout(function() {

        resolve("Data loaded successfully");

    }, 2000);

});

async function loadSuccessfulData() {

    try {

        let result = await successPromise;

        console.log(result);

    }
    catch (error) {

        console.log(error);

    }

}

loadSuccessfulData();


// ------------------------------------------
// 5. Simulated API call
// ------------------------------------------

function fetchUser() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            resolve("User data received");

        }, 2000);

    });

}

async function getUser() {

    try {

        let data = await fetchUser();

        console.log(data);

    }
    catch (error) {

        console.log(error);

    }

}

getUser();


// ------------------------------------------
// 6. Promise success/failure simulation
// ------------------------------------------

function fetchData() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            let success = true;

            if (success) {

                resolve("Data fetched successfully");

            }
            else {

                reject("Failed to fetch data");

            }

        }, 2000);

    });

}

async function loadData() {

    try {

        let data = await fetchData();

        console.log(data);

    }
    catch (error) {

        console.log(error);

    }
    finally {

        console.log("Request completed");

    }

}

loadData();


// ------------------------------------------
// 7. Basic Fetch API
// ------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {

        return response.json();

    })
    .then(function(data) {

        console.log(data);

    });


// ------------------------------------------
// 8. Fetch API with async/await
// ------------------------------------------

async function getUsers() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        console.log(users);

    }
    catch (error) {

        console.log(error.message);

    }

}

getUsers();


// ------------------------------------------
// 9. Fetch One User
// ------------------------------------------

async function getSingleUser() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch user");

        }

        let user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("City:", user.address.city);

    }
    catch (error) {

        console.log(error.message);

    }

}

getSingleUser();


// ------------------------------------------
// 10. map() with API data
// ------------------------------------------

async function getUserNames() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        let names = users.map(function(user) {

            return user.name;

        });

        console.log(names);

    }
    catch (error) {

        console.log(error.message);

    }

}

getUserNames();


// ------------------------------------------
// 11. filter() with API data
// ------------------------------------------

async function getFilteredUsers() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        let result = users.filter(function(user) {

            return user.id > 5;

        });

        console.log(result);

    }
    catch (error) {

        console.log(error.message);

    }

}

getFilteredUsers();


// ------------------------------------------
// 12. find() with API data
// ------------------------------------------

async function findUser() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        let user = users.find(function(user) {

            return user.id === 3;

        });

        console.log(user);

    }
    catch (error) {

        console.log(error.message);

    }

}

findUser();


// ------------------------------------------
// 13. forEach() with API data
// ------------------------------------------

async function printUserNames() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        users.forEach(function(user) {

            console.log(user.name);

        });

    }
    catch (error) {

        console.log(error.message);

    }

}

printUserNames();


// ------------------------------------------
// 14. reduce() with API data
// ------------------------------------------

async function calculateUserIdTotal() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        let total = users.reduce(function(sum, user) {

            return sum + user.id;

        }, 0);

        console.log(total);

    }
    catch (error) {

        console.log(error.message);

    }

}

calculateUserIdTotal();


// ------------------------------------------
// 15. map() + Template Literals
// ------------------------------------------

async function getUserDetails() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        let userDetails = users.map(function(user) {

            return `${user.name} - ${user.email}`;

        });

        console.log(userDetails);

    }
    catch (error) {

        console.log(error.message);

    }

}

getUserDetails();


// ------------------------------------------
// 16. User Directory Data
// ------------------------------------------

async function createUserDirectory() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }

        let users = await response.json();

        let userDirectory = users.map(function(user) {

            return {

                name: user.name,
                email: user.email,
                city: user.address.city

            };

        });

        console.log(userDirectory);

    }
    catch (error) {

        console.log(error.message);

    }

}

createUserDirectory();