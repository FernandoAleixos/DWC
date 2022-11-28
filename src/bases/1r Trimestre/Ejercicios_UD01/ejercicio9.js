let notas = [7, 4, 8, 9];
let notaMedia = 0;

let media = voletin => {
    for(let valor of voletin) {
        notaMedia += valor;
    }
    notaMedia /= notas.length
    return notaMedia.toFixed(1);
}

console.log(media(notas));