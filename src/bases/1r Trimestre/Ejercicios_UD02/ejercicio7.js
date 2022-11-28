//Dado un array con los días de la semana devuelve otro array con los días en mayúsculas
let arrayDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
 
let arrayMayuscula = arrayDias.map(dia => dia.toLocaleUpperCase('es-ES'));
 
console.log(arrayDias);
console.log(arrayMayuscula);