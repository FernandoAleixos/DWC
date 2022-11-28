let cuerpo = document.querySelector('body');

cuerpo.addEventListener('keypress', function(e) {
    let key = e.key;
    let keyC = e.keyCode;

    alert(`La tecla es ${key} y el código ${keyC}`);
});