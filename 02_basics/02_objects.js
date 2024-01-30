// singleton
// Object.create
// const tinderUser = new Object()  // singleton
const tinderUser = {}  // non singleton / object literals


tinderUser.id = "123abg"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@example.com",
    fullname: {
        userfullname: {
            firstname: "vaishnao",
            lastname: "vaidya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "a",
    4: "b",
}
const obj4 = {
    5: "a",
    6: "b",
}

// const obj3  = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "valid@gmail.com",
    },
    {
        id: 1,
        email: "valid@gmail.com",
    },
    {
        id: 1,
        email: "valid@gmail.com",
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object literals

const mySym = Symbol("key!")

const JsUser = {
    name: "vaishnao",
    "full name": "vaishnao Vaidya",
    [mySym]: "myKey1",
    age: 22,
    location: "Mehkar",
    email: "vaishnao@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vaishnavi@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "vaishnaoVaidya@gmail.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "vaishnao"
}

// course.courseInstructure

const {courseInstructure: instructor} = course

// console.log(courseInstructure);
console.log(instructor);

// const navbar = ({company}) =>  {

// }

// navbar(company = "vaishno")

// {
//     "name": "vaishno",
//     "coursename": "Js in Hindi",
//     "price": "free",
// }