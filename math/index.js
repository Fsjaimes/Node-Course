export function add(x,y){
    return x + y;
}

export function substract(x,y){
    return x - y;
}

export function multiply(x,y){
    return x * y;
}

export function divide(x,y){
    return x / y;
}

// module.exports = {  //Esto es un modulo creado por nosotros, forma vieja de importar modulos
//     add,
//     substract,
//     multiply,
//     divide
// }

export default {    //Esto es un modulo creado por nosotros, para utilizar la sintaxis de import en esmodule.js
    add,            //Por defecto vamos a exportar todas las funciones, pero podemos exportar una sola, así cuando la importen en otro archivo solo se pueden utilizar las funciones default, osea que 
    substract,      //si ponen un nombre x en el import se exporta lo que hay en export default
    multiply,
    divide
}

// console.log(add(10,20))
// console.log(substract(10,20))
// console.log(multiply(10,20))
// console.log(divide(10,20))