// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 50) {
//     console.log("less than 50");
// }else{
//     console.log("greater than 50");

// }
// console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    // var power = "fly"   // var takes scope in global hence provide code outer scope
    const power = "fly"
    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");   // unreadable code

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){     // 1 False  will not execute
    console.log("Allow to buy course");


}

if (loggedInFromGoogle || loggedInFromEmail){    
    console.log("Allow to buy course");
}