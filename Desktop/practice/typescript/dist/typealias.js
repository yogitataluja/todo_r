"use strict";
const personInformation1 = {
    name: "string",
    age: 23,
    isStudent: true,
    address: {
        city: "Gurgaon",
        country: "India ",
    }
};
const personInformation2 = {
    name: "string",
    age: 23,
    isStudent: true,
    address: {
        city: "Gurgaon",
        country: "India ",
    }
};
const personInformation3 = {
    name: "string",
    age: 23,
    isStudent: true,
    address: {
        city: "Gurgaon",
        country: "India ",
    }
};
//  ! type alias is use to made custom type and reduce repeatability in above code
const personInfo3 = {
    name: "string",
    age: 23,
    isStudent: true,
    address: {
        city: "Gurgaon",
        country: "India ",
    }
};
const personInfo4 = {
    name: "string",
    age: 23,
    isStudent: true,
    address: {
        city: "Gurgaon",
        country: "India ",
    }
};
const ProductData = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
function calculateTotalPrice(product) {
    return `${product.price * product.quantity}`;
}
console.log(calculateTotalPrice(ProductData));
function calculateTotalPriceWProductname(product) {
    return `${product.name}- ${product.price * product.quantity}`;
}
console.log(calculateTotalPriceWProductname(ProductData));
