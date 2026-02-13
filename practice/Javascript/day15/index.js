let arr = [1, 2, 3, 4, 5];

// Array Methods
// arr.push(6); // adds an element to the end of the array
// arr.pop(); // removes the last element of the array
// arr.unshift(0); // adds an element to the beginning of the array
// arr.shift(); // removes the first element of the array

arr[4] = 10; // updates the element at index 4

// indexOf

let fruits = ["apple", "banana", "orange", "grape"];

console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("kiwi"));

if (fruits.indexOf("kiwi") !== -1) {
  console.log("Kiwi is in the array");
} else {
  console.log("Kiwi is not in the array");
}

// includes
let isBananaPresent = fruits.includes("Banana");
// console.log(isBananaPresent);

// splice and slice

let fruits1 = ["apple", "banana", "orange", "grape", "mango"];

let results = fruits1.slice(1, 4);
console.log(results);
console.log(fruits1);

let profileName = "SagarSrinivas";

const Letter = profileName.slice(0, 5);
console.log(Letter);

// splice
fruits1.splice(3, 0, "kiwi");
console.log(fruits1);

// forEach method

const result = fruits1.forEach(() => {
  console.log(fruits1);
});

console.log(result);

let arrNum = [1, 2, 3, 4, 5];

// find method
let arrNum1 = [1, 2, 3, 4, 5];

const result2 = arrNum1.find((num) => num > 3);
console.log(result2);

// filter method
const result3 = arrNum1.filter((num) => num > 3);
console.log(result3);

const result1 = arrNum.forEach((num) => console.log(num * 2));
console.log(result1);

// map method
const result4 = arrNum1.map((num) => num * 2);
console.log(result4);

let cartvalues = [100, 200, 300, 400];
console.log(cartvalues.length);

// reduce method
const result5 = cartvalues.reduce((acc, num) => acc + num, 0);
console.log(result5);

// some method
const result6 = cartvalues.some((num) => num > 200);
console.log(result6);

// every method
const result7 = cartvalues.every((num) => num > 50);
console.log(result7);

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join(" "));
// Expected output: "Fire-Air-Water"

// split method
const str = "He ll ow or ld";
const words = str.split(" ");
console.log(words);

let obj = {
  name: "Sagar",
  age: 25,
  city: "Bangalore",
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj.name);
console.log(obj["name"]);

let arrPractice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arrPractice.filter((num) => num < 5);
console.log(sum);

//
