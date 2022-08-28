const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Async!'), 2000)
        : reject(new Error('Error!'))
    });
}

// Ya quedó la función que va a ser tratada como la promesa

const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(`${something} linea 13`);
    console.log("Hello!")
}


console.log('Before');
anotherFunction();
console.log('After')