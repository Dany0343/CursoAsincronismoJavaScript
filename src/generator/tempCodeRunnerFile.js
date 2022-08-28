function* iterate(array) {
    for (const value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'Daniel', 'Ana', 'Lucia', 'Juan']);
console.log(it.next());
console.log(it.next());
