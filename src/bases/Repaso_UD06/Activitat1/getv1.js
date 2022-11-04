const SERVER = 'https://dog.ceo/api/breeds/image/random';
const imagen = document.getElementsByClassName('imagen')[0];

window.addEventListener('load', function() {
    getPosts(SERVER)
      .then((datos) => {
        let img = document.createElement('img');

        img.src = datos.message;
        imagen.appendChild(img);
      });
});

function getPosts(url) {
    return new Promise((resolve, reject) => {
        const peticion = new XMLHttpRequest();
        
        peticion.open('GET', url);
        peticion.send();
        
        peticion.addEventListener('load', function() {
            if(peticion.status === 200) {
                resolve(JSON.parse(peticion.responseText));
            } else {
                reject('Error' + peticion.status + ' (' +
                  peticion.statusText + ') en la petición');
            }
        });
        peticion.addEventListener('error', () => reject('Error en el petición'));
    })
}