let mySecretVariable = 'xyz123'  //Al importar en el main este archivo completo, osea ./module/myModule la variable mySecretVariable no se va a mostrar porque no está dentro del "export"{} de "module"

const miDireccionWeb = "fsjaimes.com"

console.log(module)   //En el module, está vacio

module.exports = miDireccionWeb  //Llenamos export con un valor, export es una variable que está vacia, se puede ver si ejecutamos console.log(module)

//console.log(module)  //Se ve el valor en exports

//Esto se usa para enviar a otro archivo en este caso main.js

//También podemos enviar objetos, por ejemplo

const myNumber = 20
const myArray = [10, 20, 30]
const user = {
    name: 'Frank',
    lastname: 'Jaimes'
}

const group = {  //También se puede sin crear una variable, directamente module.exports = {...} 
    myWebAddress: miDireccionWeb,
    myNumber: myNumber,
    miArreglo: myArray,
    user: user
}

// module.exports = group

//ó

module.exports = {  //También se puede sin crear una variable, directamente module.exports = {...} 
    myWebAddress: miDireccionWeb,
    myNumber: myNumber,
    myArray: myArray,
    user: user
}

//También podemos exportar uno a uno, ejemplo:

module.exports.user = user;
module.exports.myNumber = myNumber;
//module.exports.variableSecreta = mySecretVariable;  <-- Si ejecutamos esta linea mySecretVariable será visible en exports de module

console.log(module)