const name = "Sravya"
const repoCount = 50
console.log(name + repoCount + "Value");

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "  srav  "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20chou"

console.log(url.replace('%20','-'))