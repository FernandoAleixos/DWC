//Dado un array con los días de la semana obtén el primer día que empieza por 'M'
let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let primerDia = diasSemana.find(dia => dia.startsWith('M'));
console.log(primerDia);