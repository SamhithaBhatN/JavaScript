// ==========================================
// JavaScript Day 4
// Topic: Loops
// ==========================================

// for Loop
console.log("for Loop");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while Loop
console.log("while Loop");

let j = 1;

while (j <= 5) {
    console.log(j);
    j++;
}

// do...while Loop
console.log("do...while Loop");

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

// break
console.log("break Example");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

// continue
console.log("continue Example");

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}