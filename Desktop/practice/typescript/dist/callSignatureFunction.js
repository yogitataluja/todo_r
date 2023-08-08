"use strict";
const student1 = { name: "yogita", age: 30,
    greet: ((country) => `welcome My name is ${student1.name} and my age is ${student1.age} & ${country}`)
};
const student2 = { name: "Ashish", age: 30,
    greet: ((country) => `welcome My name is ${student1.name} and my age is ${student1.age} & ${country}`)
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `welcome My name is ${name} and my age is ${age}`;
};
// ! In above code we defined type of function and type of function argument and return type of function
// ? 1st : ke bad call signature hai
console.log(introduction(student1));
console.log(student1.greet("India"));
console.log(student1.greet("UK"));
