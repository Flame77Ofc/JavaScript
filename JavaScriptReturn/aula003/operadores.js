// Arithmetic Operators
let students = 30;

// These codes do the same thing
students = students + 1;
students += 1;


let tables = 43;
let tablesLeft = tables - students;

/*
This can be simplified
students = students + 1
students = students - 1
students = students * 1
students = students / 1

For this
students += 1
students -= 1
students *= 1
students /= 1

*/

console.log("Students: " + students);
console.log("tables: " + tables);
console.log("tables left(blank) in the classroom: " + tablesLeft);


// The increment and decrement Operators
let points = 12;
points++;
console.log(points); // 13
points--;
console.log(points) // 12


// The precedence: Is the order that operation be executed
// is used the parenthesis()
console.log(12 + 3 * 5) //27
console.log((12 + 3) * 5) //75