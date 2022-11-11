const SERVER = 'https://jsonplaceholder.typicode.com/posts';
const contenedor = document.getElementsByTagName('div')[0];
const boton = document.getElementById('enviar');

window.addEventListener('load', function() {
    boton.addEventListener('click', (event) => {
        
        event.preventDefault();

        const objeto = {
            tittle: this.document.getElementsByTagName('input')[0].value,
            body: this.document.getElementsByTagName('input')[1].value,
            userId: this.document.getElementsByTagName('input')[2].value
        }

        console.log(objeto);
        
        sendPost(SERVER, objeto)
          .then(datos => {
            let identificador = document.createElement('p');

            identificador.innerHTML = `<br> Esta es la ID del mensaje recivido: ${datos.id}`;
            contenedor.appendChild(identificador);
          });
    });
});

function sendPost(url, obj) {
    return new Promise((resolve, reject) => {
        const peticion = new XMLHttpRequest();

        peticion.open('POST', url);
        peticion.setRequestHeader('Content-type', 'application/json');
        peticion.setRequestHeader('Access-Control-Allow-Origin', '*');
        peticion.send(JSON.stringify(obj));

        peticion.addEventListener('load', function() {
            if(peticion.status === 201) {
                resolve(JSON.parse(peticion.responseText));
            } else {
                reject('Error' + peticion.status + ' (' +
                  peticion.statusText + ') en la petición');
            }
        });
        peticion.addEventListener('error', () => reject('Error en el petición'));
    });
    
}