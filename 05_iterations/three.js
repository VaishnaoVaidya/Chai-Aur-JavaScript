// for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 2 , 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"

for (const greet of greetings) {
    if(greet == " "){
        // console.log("spaces: " + greet);
        continue
    }
    // console.log(`Each character is ${greet}`);
}

// Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    // 'game1': 'NFS',
    // 'game2': "spiderman"
     game1: 'NFS',
    game2: "spiderman"
}

// for (const [key , value] of myObject) {         // not work on object like this 
//         console.log(key, ":-", value);

// }

