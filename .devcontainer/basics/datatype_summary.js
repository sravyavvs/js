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