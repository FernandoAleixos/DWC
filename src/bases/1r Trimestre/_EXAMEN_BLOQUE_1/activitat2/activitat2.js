const contenido = document.getElementById('contenido');
const formulario = document.querySelector('form');
const nomInput = document.querySelector('input');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    peticionGet();

});

function peticionGet() {
    fetch(`https://swapi.dev/api/people/?search=${nomInput.value}`)
        .then(response => response.json())
        .then((data) => {

            let numPers = document.createElement('p');
            numPers.innerHTML = data.count;
            contenido.appendChild(numPers);

            for (let personatge of data.results) {
                let nomPers = document.createElement('p');
                nomPers.innerHTML = personatge.name;
                contenido.appendChild(nomPers);

                let edadPers = document.createElement('p');
                edadPers.innerHTML = personatge.birth_year;
                contenido.appendChild(edadPers);
                
                let planeta = personatge.homeworld;
                let nomPlaneta = document.createElement('p');

                fetch(planeta)
                .then(response => response.json())
                .then(data => {    
                    nomPlaneta.innerHTML = data.name;
                });
                contenido.appendChild(nomPlaneta);
                
            }
        })
        .catch(error => console.log(error));
    
}
