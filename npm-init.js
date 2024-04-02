//Al poner npm install - se crea el package.json automatico, solo con los modulos que instalemos
//Al poner npm init - Creamos el package.json con información nuestra, como author, repository, etc...
//Podemos usar npm i nodemon -D para que lo guarde en el package.json como una dependecia de desarrollador (dev)
//También podemos usar npm i nodemos -g para que lo descargue diractamente en la máquina, en el pc, así no tener que descargarlo en cada proyecto.

//En el apartado de scripts en package.json podemos crear nuestros propios comandos, por ejemplo:

// "scripts": { 
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "ejecutar": "node index.js "    <-- en este caso al poner npm run ejecutar en consola ejecutaría node index.js
                                        //En caso de estar en otra carpeta src/index.js
//   },