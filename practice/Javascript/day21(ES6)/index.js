// ES6 features

// const token = localStorage.getItem("token");

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "Sagar",
//     age: 24,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     authorization: `Bearer ${token}`,
//   },
// })
//   .then((response) => response.json())
//   .catch((error) => console.log(error));

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((response) => console.log(response.data));

// axios
//   .post(
//     "https://jsonplaceholder.typicode.com/users",
//     {
//       name: "Sagar",
//       age: 24,
//     },
//     {
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         authorization: `Bearer ${token}`,
//       },
//     }
//   )
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));

// const axios = new Axios({
//   baseURL: "http://localhost:3000",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     authorization: `Bearer ${token}`,
//   },
// });

// axios
//   .get("/users")
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));

// async function getUsers() {
//   try {
//     const response = await axios.get("/users");
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUsers();

// http://localhost:3000/users

// ES6
// 1. let and const

// 2. Arrow functions
const add = (a, b) => a + b;

// 3. Template literals
// const name2 = response.data.name || "Guest";

// const greeting = `Hello, ${name}!`;

// 4.ternery operator
// const name3 = response.data.name ? response.data.name : "Guest";

// 5.  Destructuring
let data = {
  name: "Sagar",
  age: 24,
};
const { name: title, age } = data;
console.log(title, age);

let arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

// 6. Spread operator
const user1 = {
  name: "Sagar",
  age: 24,
};

const user2 = {
  ...user1,
  city: "Pune",
};
console.log(user1);
console.log(user2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr1);
console.log(arr2);

// 7.rest parameters
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


