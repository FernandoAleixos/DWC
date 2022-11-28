const SERVER = 'https://dog.ceo/api/breeds/image/random';
const imagen = document.getElementsByClassName('imagen')[0];


fetch(SERVER)
    .then(response => response.json())
    .then(data => {
        let img = document.createElement('img');

        img.src = data.message;
        imagen.appendChild(img);
    })
    .catch(error => console.log(error));