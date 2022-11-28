const SERVER = 'https://jsonplaceholder.typicode.com/posts';
const contenedor = document.getElementsByTagName('div')[0];
const boton = document.getElementById('enviar');

window.addEventListener('load', function() {
    
    boton.addEventListener('click', async (event) => {
        
        event.preventDefault();

        const objeto = {
            tittle: this.document.getElementsByTagName('input')[0].value,
            body: this.document.getElementsByTagName('input')[1].value,
            userId: this.document.getElementsByTagName('input')[2].value
        }

        const datos = await getPost(SERVER, objeto);
        let identificador = document.createElement('p');

        identificador.innerHTML = `<br> Esta es la ID del mensaje recivido: ${datos.id}`;
        contenedor.appendChild(identificador);
    });
});

async function getPost(url, obj) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resultado = await response.json();
    return resultado;
}