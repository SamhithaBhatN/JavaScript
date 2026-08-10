// ==========================================
// JavaScript Day 21
// Topic: Error Handling
// ==========================================


// ------------------------------------------
// 1. Basic try...catch
// ------------------------------------------

try {
    console.log(name);
}
catch (error) {
    console.log("Error handled");
}


// ------------------------------------------
// 2. Error Name and Message
// ------------------------------------------

try {
    console.log(username);
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
}


// ------------------------------------------
// 3. try...catch...finally
// ------------------------------------------

try {
    console.log("Starting program");

    console.log(user);
}
catch (error) {
    console.log("Error handled");
}
finally {
    console.log("Program Finished");
}


// ------------------------------------------
// 4. Throwing a Custom Error
// ------------------------------------------

try {
    let age = 15;

    if (age < 18) {
        throw new Error("You must be 18 or older");
    }

    console.log("Access granted");
}
catch (error) {
    console.log(error.message);
}


// ------------------------------------------
// 5. Username Validation
// ------------------------------------------

let username = "";

try {
    if (username === "") {
        throw new Error("Username is required");
    }

    console.log("Welcome " + username);
}
catch (error) {
    console.log(error.message);
}


// ------------------------------------------
// 6. Valid Username
// ------------------------------------------

let validUsername = "Samhitha";

try {
    if (validUsername === "") {
        throw new Error("Username is required");
    }

    console.log("Welcome " + validUsername);
}
catch (error) {
    console.log(error.message);
}


// ------------------------------------------
// 7. Age Validation
// ------------------------------------------

try {
    let studentAge = 20;

    if (studentAge < 18) {
        throw new Error("You must be 18 or older");
    }

    console.log("You are eligible");
}
catch (error) {
    console.log(error.message);
}


// ------------------------------------------
// 8. Identifying Error Type
// ------------------------------------------

try {
    console.log(undefinedVariable);
}
catch (error) {
    console.log("Error Type:", error.name);
    console.log("Message:", error.message);
}


// ------------------------------------------
// 9. Password Validation
// ------------------------------------------

let password = "123";

try {
    if (password.length < 8) {
        throw new Error("Password must contain at least 8 characters");
    }

    console.log("Password accepted");
}
catch (error) {
    console.log(error.message);
}
finally {
    console.log("Password validation completed");
}