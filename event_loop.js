//En este ejemplo podemos ver como JS es asincrono aunque la funcion se ejecute a los 0 segundos muestra primero 'third'
// console.log('first')
// setTimeout(() => {
//     console.log('second')}, 0)
// console.log('third')

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('welcome to the server')
        return res.end
    }
    if(req.url === '/about'){
        //Esto sería una petición pesada, en el caso de ejecutar esto y despues querer ir a '/' tendriamos que esperar a que ejecute esto, es decir no se puede ir a ambas url
        // for(let i = 0; i < 1000 ; i++){
        //     console.log(Math.random() * i)
        // }

        return res.end('About page')
    }

    res.end('not found')
})

server.listen(3000)
console.log('Server on port 3000')