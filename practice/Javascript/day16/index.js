let car = {
  maker: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log(car.maker);
console.log(car["model"]);

function test() {
  console.log("This is a test function");
}
car.test = "valuetest";

delete car.model;
console.log(car);

// car.startEngine = test;
// console.log(car.startEngine());

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

const user = {
  name: "Alex",
  age: 25,
  role: "admin",
};

for (const key in user) {
  console.log(key, user[key]);
}

for (const value of Object.values(user)) {
  console.log(value);
}

const arr = [10, 20, 30];

for (const x in arr) {
  console.log(x, arr[x]);
}

const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}

let str = "   Hello World  ";

str.length; // 15
str[0];

str.includes("World"); // true
str.match(/o/g); // ["o", "o"]
str.indexOf("o"); // 4
str.lastIndexOf("o"); // 7
str.slice(0, 5); // "Hello"
str.substring(0, 5); // "Hello"

str.replace("World", "JavaScript"); // "Hello JavaScript"
str.split(" "); // ["Hello", "World"]
str.toUpperCase(); // "HELLO WORLD"
str.toLowerCase(); // "hello world"
str.concat("!"); // "Hello World!"
str.charAt(6); // "W"

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);
console.log(str.trim());

console.log(str.length);

//number methods
let num = 123.45632132;

console.log(num.toFixed(2)); // "123.46"

let number = 123;

console.log(number.toString()); // "123"

let str2 = "145";
console.log(Number(str2)); // 145

//parseInt and parseFloat
let str3 = "123.45";
console.log(parseInt(str3)); // 123
console.log(parseFloat(str3)); // 123.45

let testStr = "name123";
console.log(isNaN(testStr)); // true
if (isNaN(testStr)) {
  console.log("testStr is not a number");
  console.log("please enter a valid number");
} else {
  console.log("testStr is a number");
  //   calculations
}

// Math methods

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4));
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9));

const price = "199.999";

const formattedPrice = Number(price).toFixed(2);

console.log(formattedPrice);

// functions

// function declaration
function add(a, b) {
  return a + b;
}
// default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Sagar"));

// function expression
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3));

// arrow function
const divide = (a, b) => {
  return a / b;
};
const divides = (a, b) => a / b;

console.log(divide(10, 2));

//iffe immediately invoked function expression
(function () {

  console.log("This is an IIFE");
})();

(() => {
  console.log("This is an IIFE arrow function");
})();

// callback function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched";
    callback(data);
  }, 1000);
}
