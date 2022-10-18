/*
Crea 5 productos y guárdalos en un array. Crea las siguientes funciones(todas reciben ese array como parámetro):
    -prodsSortByName: devuelve un array con los productos ordenados alfabéticamente
    -prodsSortByPrice: devuelve un array con los productos ordenados por importe
    -prodsTotalPrice: devuelve el importe total del los productos del array, con 2 decimales
    -prodsWithLowUnits: además del array recibe como segundo parámetro un nº y devuelve unarray 
        con todos los productos de los que quedan menos de los unidades indicadas.
    -prodsList: devuelve una cadena que dice 'Listado de productos:' y en cada línea un guión y la
        información de un producto del array.
*/

//Creamos la clase Producto.
class Producto {
    //Constructor que recibe el nombre, precio y las unidades
    constructor(nombre, precio, unidades) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }       

    //Metodo que devuelve el valor del objeto, el precio
    valueOf() {
        return this.precio;
    }

    //Modificación del método toString
    toString() {
        return `nombre: ${this.nombre}, precio: ${this.precio}€, unidades: ${this.unidades}`;
    }
}

let arrayProd = [];
arrayProd.push(prod1 = new Producto('Yogurt', 15.00, 20));
arrayProd.push(prod2 = new Producto('Calcetines', 8.99, 40));
arrayProd.push(prod3 = new Producto('Ordenador', 500.00, 5));
arrayProd.push(prod4 = new Producto('Camara', 1099.98, 3));
arrayProd.push(prod4 = new Producto('Gráfica', 1500.00, 100));
arrayProd.push(prod4 = new Producto('Huevos', 5.00, 12));

//Copia del array
let arrayProd2 = arrayProd.slice('');
/*let prod1 = new Producto('Yogurt', 10, 100);
let prod2 = new Producto('Calcetines', 14.99, 40);
let prod3 = new Producto('Ordenador', 500, 5);*/

//Ordena los elementos del array por el nombre
let prodsSortByName = array => array.sort(function(p1, p2) {
    if(p1.nombre > p2.nombre) {
        return 1;
    } 
    if(p1.nombre < p2.nombre) {
        return -1;
    }
    return 0;
});

//Ordena los elementos del array por el precio
let prodsSortByPrice = array => array.sort((p1, p2) => p1 - p2);

//Función que muestra el total del valor de todos los productos
let prodsTotalPrice = array => array.reduce((total, producto) => total += (producto.precio * producto.unidades), 0);

//Mostrará los productos con menor unidad que el número introducido
let prodsWithLowUnits = (array, uni) => array.filter((prod) => prod.unidades <= uni);

let prodsList = array => `Listado de productos: -${array}\n`;

console.log(prodsSortByName(arrayProd));
console.log(prodsSortByPrice(arrayProd2));
console.log(prodsTotalPrice(arrayProd));
console.log(prodsList(arrayProd));