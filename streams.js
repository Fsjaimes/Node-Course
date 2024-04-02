// const {writeFile} = require('fs/promises')

// //Acá creamos un archivo "grande"
// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt', 'Hello World'.repeat(1000))   //repeat sirve para repetir, en este caso hello world
// }
// createBigFile()

const {createReadStream} = require('fs')

//Acá leemos el archivo grande
const stream = createReadStream('./data/bigfile.txt', 'utf-8')

stream.on('data', (chunk) =>{   //Lo que hace esta funcion es leer el archivo de a pedazos
    console.log(chunk)  //Chunk es como pedazo
})

stream.on('end', () => {    //El evento se ejecuta al terminar de leer
    console.log('Ya termine de leer el archivo')
})

stream.on('error', (error) =>{  //Capturamos el erro, eje, un archivo que no existe
    console.log(error)
})