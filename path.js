const path = require('path')    //Modulo de Node 'path'

const filePath = path.join('/public', 'dist', '/styles', 'main.css')    //Permite unir directorios o rutas de carpetas, lo convierte en una ruta valida para el sistema operativo en el que esté

console.log(filePath)
console.log(path.basename(filePath))    //Nos devuelve el archivo base de toda la ruta que le pasemos

console.log(path.dirname(filePath))     //Nos da la ruta sin el archivo

console.log(path.parse(filePath))   //Nos da la misma información pero en formato de objeto

console.log(path.resolve('dist'))       //Trata de completar la ruta con la palabra dada

//Esto es más para código en servidores