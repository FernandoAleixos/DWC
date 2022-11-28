/* 
Haz que a los 2 segundos de abrir la página se abra un popup con un mensaje de bienvenida. 
Esta ventana tendrá en su interior un botón Cerrar 
que permitirá que el usuario la cierre haciendo clic en él. 
Tendrá el tamaño justo para visualizar el mensaje y no tendrá barras descroll, ni de herramientas, 
ni de dirección... únicamente el mensaje.
*/
let ventana;

let popup = setTimeout(function() {
    ventana = window.open("", "", "with=100px,heigth=50px,toolbar=no,menubar=no,location=no,scrollbar=no");
    ventana.document.write('Bienvenido a esta página web!');
    ventana.document.write('<br><button onclick="cerrarVentana()">Cerrar Ventana</button>');
}, 2000);

function cerrarVentana() {
    ventana.close();
}