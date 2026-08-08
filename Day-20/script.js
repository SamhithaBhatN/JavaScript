// ==========================================
// JavaScript Day 20
// Topic: JSON
// ==========================================

// ------------------------------------------
// 1. JSON.stringify()
// JavaScript Object → JSON String
// ------------------------------------------

let student = {
    name: "Samhitha",
    age: 21,
    course: "MCA"
};

let jsonData = JSON.stringify(student);

console.log(jsonData);

// ------------------------------------------
// 2. JSON.parse()
// JSON String → JavaScript Object
// ------------------------------------------

let studentJSON = '{"name":"Rahul","age":20}';

let studentData = JSON.parse(studentJSON);

console.log(studentData);
console.log(studentData.name);
console.log(studentData.age);

// ------------------------------------------
// 3. Check Data Types
// ------------------------------------------

let studentObject = {
    name: "Samhitha",
    age: 21
};

let studentJSONData = JSON.stringify(studentObject);

console.log(typeof studentObject);
console.log(typeof studentJSONData);

// ------------------------------------------
// 4. JSON Array
// ------------------------------------------

let fruits = ["Apple", "Banana", "Mango"];

let jsonFruits = JSON.stringify(fruits);

console.log(jsonFruits);

let originalFruits = JSON.parse(jsonFruits);

console.log(originalFruits[0]);

// ------------------------------------------
// 5. Array of Objects
// ------------------------------------------

let students = [
    {
        name: "Rahul",
        age: 20
    },
    {
        name: "Priya",
        age: 21
    },
    {
        name: "Arun",
        age: 19
    }
];

let jsonStudents = JSON.stringify(students);

console.log(jsonStudents);

let originalStudents = JSON.parse(jsonStudents);

console.log(originalStudents[0].name);
console.log(originalStudents[1].name);

// ------------------------------------------
// 6. Nested JSON
// ------------------------------------------

let person = {
    name: "Rahul",
    address: {
        city: "Bengaluru",
        state: "Karnataka"
    }
};

let jsonPerson = JSON.stringify(person);

console.log(jsonPerson);

let originalPerson = JSON.parse(jsonPerson);

console.log(originalPerson.address.city);
console.log(originalPerson.address.state);

// ------------------------------------------
// 7. Complex JSON Data
// ------------------------------------------

let complexStudent = {
    name: "Samhitha",
    age: 21,
    isStudent: true,
    skills: ["Python", "JavaScript", "SQL"],
    address: {
        city: "Mangaluru",
        state: "Karnataka"
    }
};

let jsonStudent = JSON.stringify(complexStudent);

console.log(jsonStudent);

let originalStudent = JSON.parse(jsonStudent);

console.log(originalStudent.name);
console.log(originalStudent.isStudent);
console.log(originalStudent.skills[0]);
console.log(originalStudent.address.city);

// ------------------------------------------
// 8. Practical JSON Conversion
// ------------------------------------------

let product = {
    name: "Laptop",
    price: 50000,
    available: true
};

let jsonProduct = JSON.stringify(product);

console.log(jsonProduct);

let productData = JSON.parse(jsonProduct);

console.log(productData.name);
console.log(productData.price);
console.log(productData.available);

// ------------------------------------------
// 9. Final Practice Challenge
// ------------------------------------------

let employee = {
    name: "Samhitha",
    role: "Developer",
    skills: ["Python", "JavaScript", "SQL"],
    experience: 1
};

let jsonEmployee = JSON.stringify(employee);

console.log(jsonEmployee);

let employeeData = JSON.parse(jsonEmployee);

console.log(employeeData.name);
console.log(employeeData.role);
console.log(employeeData.skills[1]);
console.log(employeeData.experience);