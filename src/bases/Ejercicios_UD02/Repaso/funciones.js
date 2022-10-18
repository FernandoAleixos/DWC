function addItems(notas, item) {
    notas.push(item);
    return notas;
};
 
let clearItems = notas => {
    notas.forEach(item => {
        if(!(Number.isInteger(item))) {
            notas.push(item);
        } else {
            console.log('No va script');
        }
    });
};
 
let primerSuspenso = notas => {
    notas.forEach(item => {
        if(item <= 5) {
            return item;
        }
    });
};