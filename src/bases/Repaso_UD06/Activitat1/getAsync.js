const SERVER = 'https://dog.ceo/api/breeds/image/random';
const imagen = document.getElementsByClassName('imagen')[0];

window.addEventListener('load', async function() {
    const datos = await obtenerDatos();
    let img = document.createElement('img');

    img.src = datos.message;
    imagen.appendChild(img);
});

async function obtenerDatos() {
    const response = await fetch(SERVER);
    const objeto = await response.json();
    return objeto;
}