// !

// if (!isLogin) {
//   console.log("Welcome back!");
// } else {
//   console.log("Please log in.");
// }
// if (age >= 18 && isLogin) {
//   console.log("You can work");
// } else {
//   console.log("You cannot work");
// }
const isLogin = false;

let age = 25;

// if (age < 18 || (!isLogin && age < 60)) {
//   console.log("You cannot work");
// } else {
//   console.log("You can work");
// }
let age1 = 0;
if (" ") {
  console.log("This will not be printed");
} else {
  console.log("This will be printed");
}

console.log(5 == "5");
console.log(5 != "5");

// ternary operator
let result = age >= 18 ? "You can work" : "You cannot work";
console.log(result);

// x++;
// x--;
// ++x;
// --x;

switch (age) {
  case 18:
    console.log("You are 18 years old");
    break;
  case 25:
    console.log("You are 25 years old");
    break;
  default:
    console.log("Your age is not 18 or 25");
}

function checkAge() {
  let age = 20;
  console.log(age);
}
// function declaration
function add(a, b) {
  return a + b;
}

// function Expression
const addSum = function (a, b) {
  return a + b;
};

// arrow function
const addArrow = (a, b) => {
  return a + b;
};

// implicit return
const addArrow2 = (a, b) => a + b;


let sum = add(10, 20);
let check = checkAge();

console.log(check);
console.log(sum);
