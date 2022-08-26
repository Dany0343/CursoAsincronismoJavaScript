import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"; // Api de platzi

function postData(urlApi, data) {
    const response = fetch(urlApi, { // Estructura distinta de fetch para guardar datos ahora (POST), se le pasa un objeto que tendrá la configuración necesaria
        method: 'POST', // Método
        mode: 'cors', // Permisos
        credentials: 'same-origin', // Credenciales, no hay ninguna autenticación, no está pasando nada
        headers: { // Cabeceras que se envían en la solicitud para que nos reconozca
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)      // Información que le quiero transmitir a esta API
        // stringify se usa para mandarlo en texto
    });
    return response;
}

const data = {
    "title": "Data Structures and Algorithms Course",
    "price": 599,
    "description": "A description about this incredible course",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/tech"
    ]
};

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));

// Métodos HTTP
// GET - Obtener
// POST - Envíar
// PUT - Actualizar
// DELETE - Eliminar