/*
    Pon desde la consola un escuchador al BODY de la página de ejemplo para que al mover el ratón en cualquier punto de la ventana del navegador,
    se muestre en algún sitio (añade un DIV o un P al HTML) la posición del puntero respecto del navegador y respecto de la página.
*/
let cuerpo = document.querySelector('body');
let elemento = document.createElement('p');

 
cuerpo.addEventListener('mousemove', function(e) {
    let xc = e.clientX;
    let yc = e.clientY;

    let xp = e.pageX;
    let yp = e.pageY;
    
    elemento.innerHTML = `Las cordenadas son:<br> x nav: ${xc}, y nav: ${yc} <br> x pag: ${xp}, y pag: ${yp}`;
    cuerpo.appendChild(elemento);
});