function* gen() { // Un generator es como una función que podemos usar para controlar ese iterador y permite pausar o retomar lo que necesitemos en cualquier momento
    yield 1; // permite tener estos steps, retorna cosas
    yield 2;
    yield 3;
}
// Se denota con un asterisco

const g = gen();
console.log(g.next().value); // Se obtiene el siguiente valor con next y se muestra su valor



// Iterar un array

function* iterate(array) {
    for (const value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'Daniel', 'Ana', 'Lucia', 'Juan']);
console.log(it.next());
console.log(it.next());
