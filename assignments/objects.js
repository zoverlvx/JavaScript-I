// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
function createIntern(id, name, email, gender) {
    return {id, name, email, gender};
}
const mitzi = createIntern(1, "Mitzi", "mmelloy0@psu.edu", "F");
const kennan = createIntern(2, "Kennan", "kdiben1@tinypic.com", "M");
const keven = createIntern(3, "Keven", "kmummery2@wikimedia.org", "M");
const gannie = createIntern(4, "Gannie", "gmartinson3@illinois.edu", "M");
const anton = createIntern(5, "Antonietta", "adaine5@samsung.com", "F")

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name);
// Kennan's ID
console.log(kennan.id);
// Keven's email
console.log(keven.email);
// Gannie's name
console.log(gannie.name);
// Antonietta's Gender
console.log(anton.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
kennan.speak = function() {
    console.log(`Hello, my name is ${this.name}`);
}
kennan.speak();
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
anton.multiplyNums = function (a, b) {
    return a * b;
}
console.log(anton.multiplyNums(3, 4));
// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
const parent = {
    name: "Susan",
    age: 70,
}
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
parent.child = {name: "George", age: 50};
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
parent.child.grandchild = {name: "Sam", age: 30};
// 4. Give each of the objects the ability to speak their names using the this keyword.
/*parent.prototype.speak = function() {
    console.log(`My name is ${this.name}`);
}*/
function speak () {
    console.log(`My name is ${this.name}`);
}
parent.speak = speak;
parent.child.speak = speak;
parent.child.grandchild.speak = speak;


// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(parent.child.age);

// Log the name and age of the grandchild
console.log(parent.child.name, parent.child.age);

// Have the parent speak
parent.speak();

// Have the child speak
parent.child.speak();

// Have the grandchild speak
parent.child.grandchild.speak();
