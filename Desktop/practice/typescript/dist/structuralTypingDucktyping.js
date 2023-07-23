"use strict";
function login(credential) {
    console.log(credential);
    return true;
}
const user = {
    username: "admin",
    password: "12345",
    isadmin: true
};
login(user);
const auth = {
    username: "admin",
    password: "<PASSWORD>",
    login(username, password) {
        return username === this.username && password === this.password;
    }
};
//!inference
let num = 1;
