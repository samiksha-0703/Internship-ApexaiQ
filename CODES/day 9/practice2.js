/* FUNCTIONS, ARRAYS, OBJECTS, */

//FUNCTIONS

//function declaration
function sum(a, b) {
    return a+b;
}
console.log(sum(5, 10)); //15

//function expression
function greet(name) {
    return ("Hello, " + name + "!");
}
myname = "Sam"
console.log(greet(myname)); //Hello, Sam!

//arrow function
const double = (n) => n*2;
console.log(double(5)); //10

//callback function
function callback(n, fun) {
    return fun(n);
}
console.log(callback(10, double)); //20

//ARRAYS

