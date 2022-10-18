/*
Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. 
Haz lo siguiente con splice:

    -Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
    -Añade detrás de los Plátanos Naranjas y Sandía 
    (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
    -Quita los Kiwis y pon en su lugar Cerezas y Nísperos 
    (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)
*/

let listaCompra = ['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];

listaCompra.splice(1, 1);
console.log(listaCompra);

listaCompra.splice(3, 0, 'Naranjas', 'Sandía');
console.log(listaCompra);

listaCompra.splice(1, 1, 'Cerezas', 'Nísperos');
console.log(listaCompra);