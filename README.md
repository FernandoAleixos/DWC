# Proyecto base JavaScript

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```

Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que está configurado es el ```8081```, pero si se necesita cambiarlo, se puede hacer abriendo el ```package.json``` >> scripts. Ahí aparece la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente se cambia el puerto por el que se quiera y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente).

