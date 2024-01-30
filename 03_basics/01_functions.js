

function sayMyName (){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("O");
}

// sayMyName
// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2;
    // return result;
    // console.log("vaishno");     //not execute anything after return
    return number1 + number2;
}

// const result = addTwoNumbers(3, null)
const result = addTwoNumbers(3, 5)

// console.log("Result: " + result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("vaishno"));
// console.log(loginUserMessage());

function calculateCartPrice (val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 3000));
// console.log(calculateCartPrice(200 + 400 + 500));

const user = {
    username : "vaishno",
    price: 199
}
   
function handleObject(anyobject){
    console.log(`username id ${anyobject.username} and price ${anyobject.price}`);

}

handleObject(user);
handleObject({
    username : "vaishno",
    price: 399
});

const myNewArray = [200, 400, 300, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300, 600]));