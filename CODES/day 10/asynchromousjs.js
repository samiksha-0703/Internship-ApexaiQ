//CALLBACKS
function try_callback(name, callback){
    console.log("hello, "+ name);
    callback();
}

function greet(){
    console.log("good to see you!")
}

try_callback("Sam", greet);

//hello, Sam
//good to see you!

/*-------------------------------------------------------------------------------------------*/

//PROMISES
const try_promise = new Promise((resolve, reject)=>{
    //simulating asynchronous operation like network request
    setTimeout(()=>{
        const success = true;
        if (success) {
            resolve("data fetched successfully!");
        }
        else {
            reject(new Error("network error"));
        }
    }, 2000);
});

/*-------------------------------------------------------------------------------------------*/

//ASYNC AWAIT

// a simple async function that simulates fetching data from API
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        
        const data = await response.json();
        
        console.log("user data fetched successfully!", data);
    }
    
    catch(error) {
        console.error("failed to fetch user data!", error);
    }
}

fetchUserData();

console.log("fetching user data...please wait.");


/*-------------------------------------------------------------------------------------------*/

//COUNTERS
function makeCounter() {
    let count = 0;  //closed-over variable
    
    function increment() {
        count ++;
        console.log(count);
    }
    
    return increment;
}

const counter = makeCounter();

counter();    //1
counter();    //2
counter();    //3