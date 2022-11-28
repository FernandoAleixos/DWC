let entrada = 5;

let cuadrado = numero => {
    //Comprobamos si es un numero o no, y devolvemos false si este no es
    if(isNaN(numero)) {
        alert('No es un numero');
        return false;
    } else if(Number.isInteger(numero)) {
        Math.pow(numero, 3);
        return true;
    }
}

console.log(cuadrado(entrada));