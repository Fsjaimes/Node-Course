//Timers de Node.js
//setInterval     //Ejecuta un código despues de cierto tiempo de forma repetitiva
//setTimeout      //Ejecuta un código despues de que pase un tiempo y sale

setInterval(function escribir(){    //Funcion de EcmaScript
    console.log("Hello world!")
}, 3000)        //El 3000 es el tiempo en milisegundos

setInterval(() => {     //Función flecha,  funciona igual         
    console.log('Hello Mundo')
}, 2000)

setTimeout(function escribir(){
    console.log("Hello world!")
}, 3000)

setTimeout(() => {     //Función flecha,  funciona igual         
    console.log('Hello Mundo')
}, 2000)