let notas = [7, 4, 8, 9];
let notaMedia = 0;

function funcio1(notas) {
    for(let i = 0; i <= notas; i++) {
        notaMedia += notas[i];
    }
    notaMedia /= notas.length;
    return notaMedia;
}
notaMedia = 0;

let funcio2 = function (notas) {
    for(let valor in notas) {
        notaMedia += notas[valor];
    }
    notaMedia /= notas.length;
    console.log(notaMedia);
    return notaMedia;
}
notaMedia = 0;

let funcio3 = notas => {
    for(let valor of notas) {
        notaMedia += valor;
    }
    notaMedia /= notas.length;
    return notaMedia;
}
notaMedia = 0;

console.log(funcio1(notas));
console.log(funcio2(notas));
console.log(funcio3(notas));