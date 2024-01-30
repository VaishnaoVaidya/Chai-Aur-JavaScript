const accountId = 51299
let accountEmail = "Vaishnao@gmail.com"
var accountPassword = "123456"
accountCity = "Mehkar"
let accountState;

// accountId = 2      // not allowed

accountEmail = "vaishnavi@gmail.com"
accountPassword = "051299"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);