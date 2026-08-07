// ==========================================
// JavaScript Day 18
// Topic: Advanced Objects
// ==========================================

// ------------------------------------------
// 1. Object Methods
// ------------------------------------------

let person = {

    name: "Rahul",

    greet: function () {

        console.log("Hello!");

    }

};

person.greet();

// ------------------------------------------
// 2. this Keyword
// ------------------------------------------

let student = {

    name: "Rahul",

    greet: function () {

        console.log("Hello " + this.name);

    }

};

student.greet();

// ------------------------------------------
// 3. Nested Objects
// ------------------------------------------

let employee = {

    name: "Rahul",

    address: {

        city: "Bengaluru",

        state: "Karnataka"

    }

};

console.log(employee.address.city);

// ------------------------------------------
// 4. Object.keys()
// ------------------------------------------

console.log(Object.keys(student));

// ------------------------------------------
// 5. Object.values()
// ------------------------------------------

console.log(Object.values(student));

// ------------------------------------------
// 6. Object.entries()
// ------------------------------------------

console.log(Object.entries(student));

// ------------------------------------------
// 7. for...in Loop
// ------------------------------------------

for (let key in student) {

    console.log(key, student[key]);

}

// ------------------------------------------
// 8. Object Cloning
// ------------------------------------------

let original = {

    name: "Rahul"

};

let copy = {

    ...original

};

console.log(copy);

// ------------------------------------------
// 9. Object Merging
// ------------------------------------------

let obj1 = {

    name: "Rahul"

};

let obj2 = {

    age: 20

};

let merged = {

    ...obj1,
    ...obj2

};

console.log(merged);

// ==========================================
// Practice Exercises
// ==========================================

// Exercise 1

let student1 = {

    name: "Samhitha",

    greet: function () {

        console.log("Welcome!");

    }

};

student1.greet();

// Exercise 2

let student2 = {

    name: "Samhitha",

    greet: function () {

        console.log("Hello " + this.name);

    }

};

student2.greet();

// Exercise 3

let person1 = {

    name: "Rahul",

    address: {

        city: "Bengaluru"

    }

};

console.log(person1.address.city);

// Exercise 4

let student3 = {

    name: "Rahul",

    age: 20

};

console.log(Object.keys(student3));

// Exercise 5

console.log(Object.values(student3));

// Exercise 6

console.log(Object.entries(student3));

// Exercise 7

for (let key in student3) {

    console.log(key, student3[key]);

}

// Exercise 8

let person2 = {

    name: "Rahul"

};

let clone = {

    ...person2

};

console.log(clone);

// Exercise 9

let object1 = {

    name: "Rahul"

};

let object2 = {

    age: 20

};

let mergedObject = {

    ...object1,
    ...object2

};

console.log(mergedObject);