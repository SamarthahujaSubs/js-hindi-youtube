const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountpassword = "12345"
accountCity = "Jaipur"

// accountId = 2
accountEmail = "h@k.com"
accountPassword = "h@k.com"
accountCity = "h@k.com"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
