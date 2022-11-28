//Dado el array de notas anterior devuelve la nota media
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
 
let notaMedia = arrayNotas.reduce((media, nota) => media += (nota / arrayNotas.length), 0);
console.log(notaMedia);