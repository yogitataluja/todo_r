"use strict";
// ! array in TS
// ?In typescript you can create and initialize arrays using various approach
// using square brackets
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using array constructor
const number1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// using array.of methods
const number2 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
const string1 = Array.of("a", "b", "c", "d", "e");
// any[  ]
// operation:Accessing element using index
// ? You can access individual element of the array using square brackets notation with the index of the element.
console.log(number2[1]);
console.log(number2.length);
const value2 = "hello, world!";
const number3 = 42;
const object2 = { name: "hello", age: 23 };
console.log(typeof number3);
console.log(typeof string1);
// array methods
const fruits = ["apple", "orange", "banana", "kiwi"];
// add
const updatedfruits = fruits.push("mango");
console.log(updatedfruits);
// remove
const updated2 = fruits.pop();
console.log(updated2, "updated");
// iterate over elements
// ? we can iterate over the elements of the array using the various loop constructors such as for,  for of or array methods like forEach
// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// forEach
fruits.forEach((fruit) => console.log(fruit));
// for in loop iteration
for (const index in fruits) {
    console.log(fruits[index]);
}
// for of loop iteration
for (let fruit of fruits) {
    console.log(fruit);
}
// map method
// !double number
const numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumberArray = numberarray.map((value) => value * 2);
console.log(doubleNumberArray, "doubleNumberArray");
//! number to string
const cntNumberString = numberarray.map((value) => `${value}`);
const cntNumberStringmethod2 = numberarray.map((value) => value.toString());
console.log(cntNumberString, "stringarray");
// even filtr
const evennumber = numberarray.filter((value) => { return value % 2 === 0; });
console.log(evennumber, "evennumber");
// greater than 3 filter
const greater3 = numberarray.filter((value) => { return value > 3; });
const greater3secondmethod = numberarray.filter((value) => { return value > 3; });
// ? return array of number greater than 3
const greater3booleant = numberarray.map((value) => value > 3);
// ? return array of booleans that tell specific number greater or shorter than 3
console.log(greater3booleant, "greater3");
// pract
// map
const nameArray = ["rahul", "shalu", "ashsh", "pankaj"];
const uppercasename = nameArray.map((currentvalue) => currentvalue.toUpperCase());
console.log(uppercasename, "uppercasename");
const squareNumberArray = numberarray.map((value) => value * value);
console.log(squareNumberArray, "squareNumberArray");
// filter
const namestring = ["Alice", "Bob", "Annabel", "Annajkkjjjjd", "Andrewdsdsdfsfsffffffff", "Alexerionnnnnnnnnnnnnnnnnnñ"];
const namelengthgreater15 = namestring.filter(function (value) { return value.length > 15; });
console.log(namelengthgreater15, "namelengthgreater15");
const namestartA = namestring.filter((curvalu) => curvalu[0].toUpperCase() === "A");
console.log(namestartA, "namestartA");
