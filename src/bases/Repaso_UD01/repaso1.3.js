/*
Crea un programa que pida al usuario que introduzca una contraseña y compruebe si es o no segura. Para ello comprobará:
    -que su longitud sea mayor o igual de 8 caracteres
    -que contiene alguna mayúscula
    -que contiene alguna minúscula
    -que contiene algún número
    -que contiene alguno de estos caracteres: guión, barra baja, igual, asterisco, mas, dólar, arroba o almohadilla

Si cumple todos los requisitos se informará por consola que la contraseña introducida es segura. Si no cumple 1 o 2 se le dirá que es poco segura y si no cumple más de 2 se le dirá que es una contraseña débil.
*/

let entrada = prompt('Introduce tu contraseña:').split('');
let caracEspeciales = '-/=*+$@#';
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dist = false;
let mayus = false;
let minus = false;
let numero = false;
let caracter = false;
let cont = 0;

for (let valor of entrada) {
    if(entrada.length >= 8 && !dist) {
        dist = true;
        cont++;
    } else if(valor === valor.toLocaleUpperCase() && !mayus) {
        mayus = true;
        cont++;
    } else if(valor === valor.toLocaleLowerCase() && !minus) {
        minus = true;
        cont++;
    } for (let i = 0; i < num.length; i++) {
        if(valor === num[i] && !numero) {
            numero = true;
            cont++;
        }
    } for (let j = 0; j < caracEspeciales.length; j++) {
        if(valor === caracEspeciales.charAt(j) && !caracter) {
            caracter = true;
            cont++;
        }
    }
}
if(cont == 5) {
    console.log('Contraseña segura');
} else if(cont >= 3) {
    console.log('Contraseña poco segura.');
} else {
    console.log('Contraseña débil');
}