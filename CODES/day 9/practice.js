//print statement 
console.log("Hello, World!");

//variavle declaration
//var (can be redeclared and reassigned)
var n = 5;
console.log(n); 

//let (cant be redeclared)
let name = "ApexAI"; 
console.log(name);

//const (cant be reassigned)
const pi = 3.14;
console.log(pi);

//data types
let a = 10; //number
let str = "ApexAI"; //string
let isTrue = true; //boolean
let arr = [1, 2, 3]; //array
let obj = { name: "ApexAI", age: 1 }; //object
let undef; //undefined
let nul = null; //null
console.log(typeof n, typeof str, typeof isTrue, typeof arr, typeof obj, typeof undef, typeof nul);

//non-primitive data types
//array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits[0]); //accessing array element)
fruits.push("date"); //adding element
console.log(fruits);
fruits.pop(); //removing last element
console.log(fruits);

//object
let person = {id : 123, age : 21};
console.log(person);
console.log(person.age); //accessing object property
person.age = 22; //modifying object property

//functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("ApexAI"));

//operators
let x = 10;
let y =5;
console.log(x+y); //addition
console.log(x-y); //subtraction
console.log(x*y); //multiplication
console.log(x/y); //division
console.log(x%y); //modulus
console.log(x**y); //exponentiation
console.log(x>y); //greater than
console.log(x<y); //less than
console.log(x==y); //equal to
console.log(x!=y); //not equal to
console.log(x>=y); //greater than or equal to
console.log(x<=y); //less than or equal to
console.log(x&&y); //logical and
console.log(x||y); //logical or
console.log(!x); //logical not
console.log(x++); //increment
console.log(x--); //decrement
console.log(++x); //pre-increment
console.log(--x); //pre-decrement
console.log(x+=y); //addition assignment
console.log(x-=y); //subtraction assignment
console.log(x*=y); //multiplication assignment
console.log(x/=y); //division assignment
console.log(x%=y); //modulus assignment
console.log(x**=y); //exponentiation assignment
console.log(x==y ? "x is equal to y" : "x is not equal to y"); //ternary operator
