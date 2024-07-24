const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//Array, object, Functions
const heros = ["shaktiman", "naagaj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFun = function(){
    console.log("hello World")
}

console.log(typeof(heros))
console.log(typeof (myFun))

// stack (primitive) heap (non-primitive)
let userOne ={
    email: "sravya@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
console.log(userTwo);

userTwo.email = "savya@yahoo.com"
console.log(userOne)    ///heap memory allocated direct reference