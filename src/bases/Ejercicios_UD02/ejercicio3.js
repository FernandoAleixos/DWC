//Dado un array con los días de la semana obtén todos los días que empiezan por 'M'
let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let diasM = diasSemana.filter(dia => dia.startsWith('M'));
console.log(diasM);