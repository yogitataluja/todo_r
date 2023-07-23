"use strict";
// generic use to avoid dublicay of the code
function logString(arg) {
    console.log(arg);
    return arg;
}
logString("string");
function logNumber(arg) {
    console.log(arg);
    return arg;
}
logNumber(78);
function logArray(arg) {
    console.log(arg);
    return arg;
}
logArray([78, 78, 90]);
// we can 
// !we can reduce this dublicay by using generic or any 
// use of any
function logArray1(arg) {
    console.log(arg);
    return arg;
}
logArray1([78, 78, 90]);
// ? but we try to avoid use of any becaue it will be js not type script if we any to type . any is use to avoid type checking 
// !----------------------------------------------------------------generic----------------------------------------------------------------//
function logArray2(arg) {
    console.log(arg);
    return arg;
}
logArray2([78, 78, 90]);
logArray2("hello");
logArray2(2);
logArray2(true);
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [{ age: 30 }, { age: 10 }, { age: 40 }, { age: 50 }];
const oldes = getOldest(people);
console.log(oldes);
const players = [{ name: "john", age: 30 }, { name: "jack", age: 45 }, { name: "joe", age: 40 }];
// assert  not good practise
const person = getOldest(players);
function getOldestgeneric(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
getOldestgeneric(players);
async function fetchPostData(url) {
    const response = await fetch(url);
    return response.json();
}
const fetchUserdata = async (url) => {
    const response = await fetch(url);
    return response.json();
};
//  const data= fetchPostData("https://jsonplaceholder.typicode.com/posts")
// anonymus function
//! normal anonymus function
// async function() {
//     const data=await  fetchUserdata("https://jsonplaceholder.typicode.com/posts/1")
//  };
// ! arrow anonymus function
(async () => {
    const data = await fetchPostData("https://jsonplaceholder.typicode.com/posts");
})();
(async () => {
    const data = await fetchUserdata("https://jsonplaceholder.typicode.com/posts/1");
})();
// api call using generic function
const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
};
(async () => {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    data.body;
})();
