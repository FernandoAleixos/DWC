let loteria = Math.floor(Math.random() * 9) + 1;
console.log(loteria);

let numero;

do {
    numero = window.prompt('Introduce un número: ');
    
    if(numero == loteria) {
        alert('Muy bien, has acertado el número!! El número era: ' + loteria);
    } else if(numero == null) {
        alert('Has cancelado');
    } else {
        alert('El número introducido no es correcto');
    }
} while(numero != loteria && numero != null);