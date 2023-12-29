const accountId = 144553
let accountEmail = "Sakshi@gmail.com"
var accountPassward = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "priyanshi@gmail.com"
accountPassward = "2345"
accountCity = "Rishikesh"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassward,accountCity,accountState])