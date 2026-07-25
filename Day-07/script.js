// ==========================================
// JavaScript Day 7
// Topic: Objects
// ==========================================

let student = {
    name: "Samhitha",
    age: 21,
    course: "MCA",
    cgpa: 8.61
};

console.log(student);

// Dot Notation
console.log(student.name);
console.log(student.course);

// Bracket Notation
console.log(student["cgpa"]);

// Update
student.cgpa = 8.75;

// Add Property
student.city = "Mangaluru";

// Delete Property
delete student.age;

// Loop Through Object
for (let key in student) {
    console.log(key + ":", student[key]);
}