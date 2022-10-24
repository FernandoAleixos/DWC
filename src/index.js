/*
    Contruye una expresión regular para lo que se pide a continuación y pruébala con distintas cadenas:
        -un código postal
        -un NIF formado por 8 números, un guión y una letra mayúscula o minúscula
        -un número de teléfono y aceptamos 2 formatos: XXX XX XX XX o XXX XXX XXX. 
            EL primer número debe ser un 6, un 7, un 8 o un 9
*/

let entrada = prompt('Introduce un codi postal:');
let cp = /[1-4][0-9]{4}/;
let nif = /^[0-9]{8}(-|)[a-zA-Z]$/;



console.log(cp.test(entrada));
