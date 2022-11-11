let pinta_posicion = (latitude, longitude) => {
    const contenedor = document.getElementById('contenedor');
    const resultado = document.createElement('p');

    resultado.innerHTML = `Estas son las coordenadas de la ubicación <br>lat: ${latitude} <br>long: ${longitude}`;
    contenedor.appendChild(resultado);
}


navigator.geolocation.getCurrentPosition(

    (position) => {
      pinta_posicion(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED: // El usuario no autoriza al navegador a acceder a la localización
          msg = "El usuario ha denegado la petición de geolocalización";
          break;
        case error.POSITION_UNAVAILABLE: // No se puede obtener la localización
          msg = "La información de localización no está disponible.";
          break;
        case error.TIMEOUT: // Ha expirado el tiempo para obtener la localización
          msg = "Ha expirado el tiempo para obtener la localización";
          break;
        case error.UNKNOWN_ERROR:
          msg = "Se ha producido un error desconocido.";
          break;
      }
      muestra_error(msg);
    }
);