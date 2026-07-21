// ==========================================
// JavaScript Day 3
// Topic: Conditional Statements
// ==========================================

// if Statement
let age = 21;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// if...else
let temperature = 30;

if (temperature > 35) {
    console.log("It's a hot day.");
} else {
    console.log("The weather is pleasant.");
}

// else if
let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 75) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}

// Nested if
let hasID = true;

if (age >= 18) {

    if (hasID) {
        console.log("Entry Allowed");
    } else {
        console.log("Bring your ID");
    }

} else {
    console.log("Under Age");
}

// switch
let day = 3;

switch(day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");
}