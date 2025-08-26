/* ARRAYS, OBJECTS, DOM, EVENTS HANDLING PRACTICE */

//create an array
let a = [12, 100, 12, 20];
console.log(a); //[ 12, 100, 12, 20 ] 

let b = new Array(12, 20, 30, 40);
console.log(b)  //[ 12, 20, 30, 40 ]

//accessing elements 
console.log(a[0]);  //12
console.log(a[a.length-1]);  //20 

//modifying array elements 
b[0]=10;
console.log(b);    //[ 10, 20, 30, 40 ]
 
//adding elements
b.push(50);
console.log(b);  //[ 10, 20, 30, 40, 50 ]

b.unshift(0);
console.log(b);  //[ 0, 10, 20, 30, 40, 50 ]

//removing elements (pop, shift, splice)
b.splice(1,2);//remove 2 elements from index 1
console.log(b);  //[ 0, 30, 40, 50 ]

//array length
console.log(a.length)  //4 

//iteration 
for(let i=0; i<a.length; i++){
    console.log(a[i])
}   

//concatenation 
let newarr = a.concat(b);
console.log(newarr);//[12,100,12,20,0,30,40,50]

//array to string 
console.log(a.toString());  //12,100,12,20

//check type 
console.log(typeof a);   //object

//OBJECTS {KEY: VALUE PAIRS}



