/* 
Haz una función que ordene las notas de un array pasado como parámetro.
Si le pasamos [4, 8, 3, 10, 5] debe devolver [3, 4, 5, 8, 10]. Pruébalo en la consola.
*/
let numeros = [4, 8, 3, 10, 5];

let numerosOrdenados = numeros.sort(function(n1, n2) {
    if(n1 > n2) {
        return 1;
    } 
    if(n1 < n2) {
        return -1;
    }
    return 0;
});

/* Versión más corta
let numerosOrdenados = numeros.sort(function(n1, n2) {
    return n1 - n2;
});
*/

console.log(numeros);