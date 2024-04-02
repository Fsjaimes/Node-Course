const http = require('http')
const {createReadStream} = require('fs')

//Streams nos sirve para enviar archivos por partes
const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf8'
    })

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    }) 

    fileStream.on('error', error => {
        console.log(error)
    })
})

server.listen(3000)
console.log(`Server on port ${3000}`)