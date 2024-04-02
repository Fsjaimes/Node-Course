const http = require('http')    //Modulo http es de Node

const server = http.createServer(function (request, response){ 

    console.log(request.url) //El objeto http es informacion por parte del cliente
    //Estas rutas es node directamnete, pero ya hay frameworks que lo hacen 
    if(request.url === '/'){
        response.write('Welcome to the Server')
        return response.end()
    }

    if(request.url === '/about'){
        response.write('acerca de')
        return response.end()
    }

    response.write(`
    <h1>Not Found</h1>
    <p>Esta página no se encontró</p>
    <a href="/">Volver a la pagina principal</a>
    `)
    response.end()
8})

    server.listen(3000)     //El puerto por donde escucha el servidor, por lo general se usan numeros altos para evitar los
                    //Diferentes puertos, ej
    console.log('Servidor escuchando en el puerto 3000')