const SERVER = 'https://dog.ceo/api/breeds/image/random';
const imagen = document.getElementById('imagen');

window.addEventListener('load', function() {
    getPosts();
});

function getPosts() {
    const peticion = new XMLHttpRequest();

    peticion.open('GET', SERVER);
    peticion.send();
    
    peticion.addEventListener('load', function() {
        if(peticion.status === 200) {
            const datos = JSON.parse(peticion.responseText);

            console.log(datos);

            const newPost = '';
            newPost.innerHTML = `<img src="${datos}" alt="Hola">`;
            imagen.appendChild(newPost);

        } else {
            console.error('Error' + peticion.status + ' (' +
            peticion.statusText + ') en la petición');
        }
    });
}
