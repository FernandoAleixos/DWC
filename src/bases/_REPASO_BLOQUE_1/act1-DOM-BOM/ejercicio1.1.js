/* 
Crear una página web básica, un archivo CSS con estilos predefinidos para unos id y clases que utilizaremos 
posteriormente y un archivo JS para realizar distintas acciones sobre elementos del HTML.

    -Crear un div, añadirle una clase predefinida en el CSS y añadirlo al body de nuestro DOM.
    -Crear un párrafo, asignándole un id y añadiéndolo al div anteriormente creado.
    -Crear un formulario con el aspecto que aparece a continuación que realizaría una búsqueda de Google. 
        Lo insertaremos en el div y cuando se vaya a enviar el formulario, 
        cancelaremos el funcionamiento por defecto de este, y en cambio, 
        realizaremos la consulta a otra página de búsqueda, modificando el documento.location, 
        con un valor por ejemplo de https://www.bing.com/search?q=texto_del_input_con_name_q.
*/

const cuerpo = document.body;
const formulario = document.querySelectorAll('form')[0];

window.addEventListener('load', function() {
    let div1 = document.createElement('div');
    div1.innerHTML = '<div class="div1"></div>';
    cuerpo.appendChild(div1);

    let parrafo = document.createElement('p');
    parrafo.innerHTML = '<p id="parrafo1">Este el el parrafo 1</p>';
    div1.appendChild(parrafo);

    /* formulario.addEventListener('submit', event => {
        event.preventDefault();

        let campo = document.getElementsByTagName('input')[0].value;
        document.location = `https://www.bing.com/search?q=${campo}`;
    }); */

    const tabla = document.createElement('table');
    let th = document.createElement('th');
    
    div1.appendChild(tabla);
    tabla.appendChild(th);

    formulario.addEventListener('submit', event => {
        event.preventDefault();

        let campo = document.getElementsByTagName('input')[0].value;

        let tr = document.createElement('tr');
        
        th.innerHTML = '<th>Valor introducido en el campo de texto</th>';
        tr.innerHTML = `<tr>${campo}</tr>`;

        tabla.appendChild(tr);
    });

    tabla.addEventListener('dblclick', (event) => {
        if(event.target.tagName == 'TR') {
            console.log('hola');
            event.target.remove();
        }
    });
});