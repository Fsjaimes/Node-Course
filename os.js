const os = require('os')  //<-- Modulo os de Node

console.log(os.userInfo())  //Información del equipo
console.log(os.uptime())    //Nos da el tiempo desde que se encendio la pc en segundos
console.log(os.platform())  //Nos da el nombre del sistema en el que se está ejecutando node, en este caso Win32, windows
console.log(os.totalmem())  //Nos permite ver la memoria total del sistema
console.log(os.freemem())   //Nos permite ver la memoria libre

console.table({     //<-- Este console nos muestra la información en una tabla
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})

