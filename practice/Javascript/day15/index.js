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
// console.log(results);
// console.log(fruits1);

let profileName = "SagarSrinivas";

const Letter = profileName.slice(0, 5);
console.log(Letter);

// splice
fruits1.splice(2, 2, "kiwi", "melon");
console.log(fruits1);


