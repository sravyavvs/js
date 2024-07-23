const accountId=144532
let accountEmail="xx.google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
//accountId=2 // const cannot be assigned another value once declared

console.log(accountId)

accountEmail = "abc.google.com"
accountPassword="34567"
accountCity="Mumbai"


/*
dont use var because of issues in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])