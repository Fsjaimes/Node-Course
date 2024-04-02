//const {myArray, myNumber, myWebAddress, user } = require('./module/myModule')  //require se utiliza para importar 
const myModule = require('./module/myModule')  //Podemos utilizar una variable general

// console.log(myModule)

// console.log(myArray)
// console.log(myNumber)
// console.log(myWebAddress)
// console.log(user)

const math = require('./math/index')

console.log(math)

console.log(math.add(10,20))
console.log(math.substract(10,20))
console.log(math.multiply(10,20))
console.log(math.divide(10,20))