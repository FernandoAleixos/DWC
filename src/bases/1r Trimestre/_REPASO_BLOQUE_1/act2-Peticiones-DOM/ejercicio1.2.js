const contenido = document.getElementById('contenido');
const formulario = document.getElementById('formBusca');
const idEntrada = document.querySelector('input');

formulario.addEventListener('submit', event => {

    event.preventDefault();

    fetch(`https://fakestoreapi.com/products/${idEntrada.value}`)
        .then(response => response.json())
        .then(data => {
            let divProd = document.createElement('div');
            let titleProd = document.createElement('h4');
            let imgProd = document.createElement('img');
            let desProd = document.createElement('p');

            titleProd.innerHTML = data.title;
            imgProd.src = data.image;
            desProd.innerHTML = data.description;

            divProd.appendChild(titleProd);
            divProd.appendChild(imgProd);
            divProd.appendChild(desProd);

            contenido.appendChild(divProd);
        });
});