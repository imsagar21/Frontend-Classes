// Browser API
// js;
// browser;
// apis;

// 1.DOM API

// 2.Timers api
//  setTimeout
//  setInterval
//  clearTimeout
//  clearInterval

// 3.Network api

// 4.Storage Api
// localStorage;
// sessionStorage;

// synschoronous and asynschoronous

console.log("start");

// setTimeout(() => {
//   console.log("inside setTimeout");
// }, 2000);

console.log("end");

// setTimeout

// setTimeout(() => {
//   console.log("i am inside setTimeout");
// }, 5000);

// setInterval(() => {
//   console.log("i am inside setInterval");
// }, 1000);

// clearInterval example
// let count = 0;
// const intervalId = setInterval(() => {
//   console.log("i am inside setInterval");
//   count++;
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("Interval cleared");
//   }
// }, 1000);

// clearTimeout example

// const timeoutId = setTimeout(() => {
//   console.log("i am inside setTimeout");
// }, 5000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
//   console.log("Timeout cleared");
// }, 3000);

// date with setInterval example

// setInterval(() => {
//   const currentDate = new Date();
//   console.log("Current Date and Time:", currentDate.toLocaleString());
// }, 1000);

// #storage api

// localStorage.setItem("token", 1234234324213321432454354359879857934);
// localStorage.setItem("name", "john doe");
// localStorage.setItem("age", 30);

// console.log(localStorage.getItem("age"));

// localStorage.removeItem("age");

// console.log(localStorage.getItem("age"));

// sessionStorage.setItem("sessionToken", 12123);
// sessionStorage.getItem("sessionToken");

// sessionStorage.removeItem("sessionToken");

// fetch  example

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
