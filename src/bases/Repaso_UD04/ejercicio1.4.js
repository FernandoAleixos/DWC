/*
Se pide completar añadir una función que se ejecute cuando cargue la página y que de la siguiente funcionalidad a la misma:

    -Cuando hagamos doble click en un item de dentro del bloque, este pasará automáticamente al bloque contrario.
    -Deberemos poder hacerlo de forma indefinida, por lo que al crear el elemento y pasarlo al bloque contrario, deberemos añadir el Listener correspondiente otra vez.
*/

let divContenedor = document.getElementById('contenedor');

//Creamos el exucuchador en el div padre ("contenedor")
divContenedor.addEventListener('dblclick', function(event) {
    //Si el evento es igual que la etiqueta "p"
    if(event.target.getElementsByTagName('p') == 'P') { 
        let div1 = document.getElementsByTagName('div')[0];
        let div2 = document.getElementsByTagName('div')[1];

        if(event.target.parent == ) { //Buscamos si esta en el primer div

        }
    } 
})