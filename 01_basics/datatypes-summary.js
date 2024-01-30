//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);
// console.log(typeof anotherId);

const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//************************************************* 

// Stack (Primitive), Heap(Non Primitive)

let myChannel = "vaishnaovaidya"

let anotherName = myChannel
anotherName = "VaishnaviKale"

console.log(anotherName);
console.log(myChannel);

let userOne = {
    email : "vaishnao@gmail.com",
    upi: "user@ybl"

}

let userTwo = userOne
userTwo.email = "vaishnavi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);