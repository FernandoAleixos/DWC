//Dado un array con los días de la semana indica si algún día empieza por 'S'.
//Dado un array con los días de la semana indica si todos los días acaban por 's'
let arrayDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
 
let parte1 = arrayDias.some(empieza => empieza.startsWith('S'));
let parte2 = arrayDias.every(finaliza => finaliza.endsWith('s'));

console.log(parte1);
console.log(parte2);