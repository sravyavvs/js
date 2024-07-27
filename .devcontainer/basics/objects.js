// singleton
//Object.create
// object literals

const mySym = Symbol("Key1")

const JsUser ={
    name: "Hitesh",
    "full name": "Sravya Vadupu",
   [mySym]: "myKey1",
    age: 18,
    location: "Hyderabad",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
//console.log(JsUser."full name") // not possible to access
console.log(JsUser.mySym)
//console.log(typeof JsUser.mySym) // returns string not a symbol
console.log(JsUser[mySym])

//Object.freeze(JsUser) //  cannot change the Object data 

JsUser.greeting = function(){
    console.log("Helo JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Helo JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn= false
 //console.log(tinderUser)

 const regularUser = {
    email: "some@gmail.com",
    fullname:{
      userfullname: {
        firstname: "Sravya",
        lastname: "Vadupu"
      }
    }
 }

 console.log(regularUser.fullname.userfullname)

 const onj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}

 //const obj3 = Object.assign({}, onj1, obj2)
 //const obj3 = {onj1, obj2}

 const obj3 = {...onj1, ...obj2}
 //console.log(obj3)

 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
 ]

 
 console.log(tinderUser)

 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser))

 console.log(tinderUser.hasOwnProperty('isLoggedIn'))


