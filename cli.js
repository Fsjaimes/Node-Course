//Utilizamos el gestor de paquetes npm para instalar modulos, en este caso instalamos el modulo colors, así: npm install colors o npm i colors
const colors = require('colors')

console.log('Hello world'.bgBlue)   //Estás .bgBlue son funciones del modulo colors, en este caso vuelve el texto azul en consola
console.log('fsjaimes.com'.bgMagenta)
console.log('google.com')

//También podemos quitar los modulos con npm remove colors, lo quita del package.json y node_modules