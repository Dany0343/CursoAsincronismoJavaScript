// Promesa es algo que va a pasar, podría ser ahora, en un rato o nunca.
// Una promesa tiene 3 estados. Pendiente, Cumplido y Rechazado

// Construcción

const promise = new Promise(function(resolve, reject) { // Tenemos una función anónima que nos regresa dos funciones. resolve y reject
    resolve('Todo ha sido correcto');
});



const cows = 15;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    }
    else {
        reject(`We don't have enough cows`);
    }
});

countCows
    .then((result) => { // Para capturar el resolve
        console.log(result)
    })
    .catch((error) => { // Para capturar el reject
        console.log(error)
    })
    .finally(() => { // Cuando ya terminó
        console.log("Finally");
    })
