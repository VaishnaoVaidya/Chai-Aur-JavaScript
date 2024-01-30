const user = {
    username: "vaishnao",
    price: 199,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "vaishnavi"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "vaishnao"
//     console.log(this.username);
// }

// chai();

// const chai = function (){
//     let username = "vaishnao"
//     console.log(this.username)
// }

const chai =  () =>{
    let username = "vaishnao"
    console.log(this)
}



// chai()

// const addTwo = (num1 ,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1 ,num2) =>  num1 + num2

// const addTwo = (num1 ,num2) =>  (num1 + num2)
const addTwo = (num1 ,num2) =>  ({username: "vaishnao"})


console.log(addTwo(5, 9));

// const myArray  = [1, 2, 3, 4, 5]    

// myArray.forEach(function (){})
// myArray.forEach( () =>{})
// myArray.forEach( () =>())