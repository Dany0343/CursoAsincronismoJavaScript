const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true) // Se abre una colección a nuestra API, primero va el tipo de petición, después la url y true para habilitarla
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) { // 0 no se ha inicializado, 1 loading, 2 se ejecuto el valor de sent, 3 trabajando con la solicitud, 4 se ha completado la llamada  
            if (xhttp.status === 200) { // 200 "la solicitud ha sido correcta"
                callback(null, JSON.parse(xhttp.responseText));
            }
            else {
                const error = new Error('Error' + urlAPI);
                return callback(error, null)
            }
        }
    }
    xhttp.send(); // Si no hacemos el .send no se ejecuta nunca el AJAX
    // Esta forma se utilizaba en los inicios de JavaScript
}


fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){ // Optional chaining
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});