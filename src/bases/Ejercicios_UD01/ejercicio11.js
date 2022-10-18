let numero = prompt('Introduce un número: ');

let cuadrado = numero => {
    if(numero % 1 == 0) {
        return numero * numero * numero;
    } else {
        alert('False');
    }
}

console.log(cuadrado(numero));
