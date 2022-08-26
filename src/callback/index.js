function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}


console.log(calc(2, 2, sum)); // No es necesario agregar los parentesis de la función a pasar
// Se invocaría inmediatamente
// No se le pasa a sum los argumentos que va a requerir


// Otros ejemplos con Callbacks

setTimeout(function () {
    console.log("Hola JavaScript");
}, 5000);

function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, "Oscar");