import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Las funciones async por defecto devuelven una promesa
// async en function declaration
async function fetchData(urlApi) {
    const response = await fetch(urlApi); // Ir por los datos y esperar
    const data =  await response.json(); // Esperar por la transformación de los datos a JSON

    return data; // Se retorna 
    // Fetch por debajo utilza el concepto de las promesas
}

// async en function expression
const anotherFunction = async (urlApi) => {
    try { // Logica de la app
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }
    catch (error) { // Si alguna promesa llega a reject se viene a catch, tiene como parametro un error
        console.error(error);
    }
}

anotherFunction(API); // Se ejecuta la función