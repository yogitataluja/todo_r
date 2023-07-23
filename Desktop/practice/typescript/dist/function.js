"use strict";
// function greet(name:string, id:number){
//     console.log(`${name} and ${id}`);
// }
// greet("vinod",1)
// !fat arrow function
const greet = (name, id) => `${name} and ${id}`;
greet("vinod", 1);
function isPalindrome(palin) {
    let mypalin = palin.split("").reverse().join("");
    console.log(palin, "palin");
    console.log(mypalin, "mypalin");
    return mypalin === palin;
}
// isPalindrom÷e("palindrom")
console.log(isPalindrome("123291"));
function calculateAverage(array) {
    // let sum=0
    // for(let i=0;i<array.length;i++){
    //     sum+=array[i]
    // }
    // return sum/array.length
    const reducevale = array.reduce((acc, sum) => { sum += acc; return sum; }, 0);
    return reducevale / array.length;
}
console.log(calculateAverage([1, 1, 1, 1]));
const findMaxValue = (array) => {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        }
    }
    return max;
};
console.log(findMaxValue([2, 4, 5, 6, 7, 8, 9, 10]));
// function default and optional paramter
//  default
const greet3 = (name, id = 1) => {
    return `${name} ${id}`;
};
console.log(greet3('vinod'));
// optional function
const greet4 = (name, id) => {
    if (id) {
        return `${name} ${id}`;
    }
    else {
        return `${name}`;
    }
};
console.log(greet4('vinod', 4));
console.log("vinod");
