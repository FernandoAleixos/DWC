/* 
Crea un programa que pida al usuario que introduzca una edad y muestre por consola un mensaje en función de la edad introducida:
    - menor de 18: Menor de edad
    - entre 18 y 65: Trabajando o estudiando
    - mayor de 65: Jubilado 

También controlaremos los posibles errores con los siguientes mensajes los mostraremos con console.error:
    -número menor que 0: La edad debe ser positiva
    -número con decimales: Introduce la edad sin decimales
    -no es un número: La edad introducida no es un número
*/

let entrada = parseInt(prompt('Introduce tu edad: '));

let estado = function(edad) {
    if(!(isNaN(edad) || edad < 0 || edad > 120)) {
        if(edad < 18) {
            return 'Menor de edad';
        } else if(edad >= 18 && edad <= 65) {
            return 'Trabajando o estudiando';
        } else {
            return 'Jubilado';
        }
    } else {
        console.error('ERROR. El dato introducido no es valido');
    }
}

console.log(estado(entrada));