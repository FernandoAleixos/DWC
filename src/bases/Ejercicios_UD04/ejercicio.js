window.onload = function() {
    document.getElementById('button1').addEventListener('click', function() {
        alert('Click sobre el botón 1');
    }).addEventListener('mouseenter', function() {
        alert('Entrando en botón 1');
    });
}
