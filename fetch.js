

// fetch('https://jsonplaceholder.typicode.com/posts') //Fetch es una funcion que es una API, en este caso va a la url que le pasamos y la consulta
//     .then(res => res.json())    //Convertimos la respuesta en formato JSON
//     .then(data => console.log(data))    //Maneja los datos JSON obtenidos y los imprime en la consola

    //Esta funcion hace lo mismo que la de arriba pero con async y await
async function loadData(){
    try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

loadData()

