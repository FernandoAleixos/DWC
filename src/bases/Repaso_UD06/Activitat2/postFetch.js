const SERVER = 'https://jsonplaceholder.typicode.com/posts';
const contenedor = document.getElementsByTagName('div')[0];
const boton = document.getElementById('enviar');

boton.addEventListener('click', (event) => {
    event.preventDefault();

    const objeto = {
        tittle: this.document.getElementsByTagName('input')[0].value,
        body: this.document.getElementsByTagName('input')[1].value,
        userId: this.document.getElementsByTagName('input')[2].value
    }

    fetch(SERVER, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(response.ok){
            response.json()
            .then(datos => {
                let identificador = document.createElement('p');
        
                identificador.innerHTML = `<br> Esta es la ID del mensaje recivido: ${datos.id}`;
                contenedor.appendChild(identificador);
            });
        } else {
            console.error('Error en la petición');
        }
    }).catch();
});