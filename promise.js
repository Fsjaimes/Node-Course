const { readFile } = require('fs/promises');  //Modulo fs, si importamos con /promises las funciones de fs ya vienen convertidas a promises
const {promisify} = require('util') //Modulo util de nodejs

//const readFilePromise = promisify(readFile) //lo que hace ese código es convertir la función readFile de Node.js, que espera un callback,
                                            //que normalmente usa devoluciones de llamada, en una que devuelve promesas.

//Código async - colbacks
// const getText = (pathFile) => {
//     return new Promise(function(resolve, reject){
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if(err) {
//                 reject(err)
//             }
    
//             resolve(data)
//         })
//     })
// }

//Este código es más sencillo y hace lo mismo que el de arriba, pero sin callbacks, es una promise
// getText('./data/four.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/first,txt'))
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


//Mejor forma 
async function read(){
    try{
        const result = await readFile('./data/first.txt', 'utf-8')  //readFile es una funcion del modulo fs
        console.log(result)
        const result2 = await readFile('./data/second.txt', 'utf-8')
        console.log(result2)
        //throw new Error('Este es un error que no se esperaba')  //Throw acaba con la ejecución, y creamos un objeto Error() de JS
        const result3 = await readFile('./data/third.txt', 'utf-8')
        console.log(result3)
        const result4 = await readFile('./data/four.txt', 'utf-8')
        console.log(result4)
    }
    catch(error){   //Con el catch capturamos el error
        console.log(error)
    }
}

read()