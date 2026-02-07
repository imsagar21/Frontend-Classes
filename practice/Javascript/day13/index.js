let name;
console.log(name);

let score;

score = 50;
console.log(score);

// primitives
let x = 10;
let y = x;
y = 20;

console.log(x);
console.log(y);
//reference
let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 20;

console.log(obj1.x);
console.log(obj2.x);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1);
console.log(arr2);

function greet() {
  console.log("Hello");
}
let greet2 = greet;
greet2.language = "English";
console.log(greet.language);

// arrays, objects and functions in javascript are objects
// heap vs stack

// primitive - stack
// reference - heap

string
console.log("Hello World");
console.log("Hello" + " World");
let str1 = "Helo";
let str2 = " World";
console.log(str1 + str2);
console.log(str1.concat(str2));

console.log(`hello world ${str1} ${str2}`);

// == loose equality operator
// === strict equality operator
true == 1
false=0
console.log(5 == "5");
console.log(0 == true)

console.log(5 === "5");
let age = 20;

if (age>=18 && age<=60){
    console.log("You can work");
} else {
    console.log("You cannot work");
}

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in to continue");
} else {
  console.log("Welcome back!");
}
