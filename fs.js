const fs = require('fs')    //<-- Modulo fs

//Leer Archivos
// const first = fs.readFileSync('./data/first.txt', 'utf-8')   //Este método nos permite leer un archivo pasandole la ruta, nos da el dato en "buffer", que es 
// const second = fs.readFileSync('./data/second.txt')               //el dato pero en el lenguaje para la máquina lo podemos arrglar en el segundo espacio del método

// console.log(first)
// console.log(second.toString())  //Otra forma de pasar de "buffer" a String

// //Crear archivos
// fs.writeFileSync('./data/third.txt', 'Este es un tercer archivo') //De esta forma creamos un archivo en la carpeta /data

// let titulo = 'Esto se añadió al cuarto archivo'   //Al ejecutar el archivo de nuevo y hay cambios se sobreecribe 
// fs.writeFileSync('./data/four.txt', titulo, {   //Agregando el objeto flag: 'a' podemos agregar nuevo texto al arhivo, es decir, no se sobrescribe
//     flag: 'a'
// })


//Acá se pueden var las funciones de forma asincrona

fs.readFile('./data/first.txt', function(error, data){
    console.log(error)
    console.log(data.toString())
})

fs.readFile('./desconocido/first.txt', (error, data) =>{    //Funcion flecha, es lo mismo que la de arriba (ecmascript)
    if(error){
        console.log(error)
    }
    console.log(data.toString())

    fs.readFile('./desconocido/newfile.txt', (error, data) =>{    //Funcion flecha, es lo mismo que la de arriba (ecmascript)
        if(error){
            console.log(error)
        }
        console.log(data.toString())
    
        fs.writeFile('./data/newfile2.txt', 'archivo creado desde fs', (error, data) => {
            console.log(error)
            console.log(data)
        
            fs.writeFile('./data/newfile3.txt', 'archivo creado desde fs', (error, data) => {
                console.log(error)
                console.log(data)
            })

        })
    
    })
})