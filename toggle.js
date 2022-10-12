let toggle = document.getElementById("container")
let texto = document.getElementById("texto")
let body = document.querySelector('body')



// Función que cambia el texto de un h3 aplicando el concepto de operador ternario
function colocar(valor){
    (valor)?texto.innerHTML = "<h3 class='textoToggle'>Selector de temas: Theme blue</h3>":texto.innerHTML = "<h3 class='textoToggle'>Selector de temas: Theme pink</h3>"

}

toggle.onclick = function(){

    let valor = toggle.classList.toggle('active')

    colocar(valor)

    body.classList.toggle('active')
  
}


// ------------LocalStorage-------------
// Almacena los datos en el localStorage obteniendo el array de objetos datos
// function actualizarLS(valor) {

//     let valorTomado = JSON.stringify(valor)

//     localStorage.setItem("theme", valorTomado)
// }

// // Recarga todos los datos almacenados en el localStorage
// function obtenerLS() {

//     let valor = localStorage.getItem("theme")
//     console.log(valor)
//     colocar(valor)
//     // body.classList.toggle('active')

// }

// obtenerLS()