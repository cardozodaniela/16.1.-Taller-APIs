const url = "https://dog.ceo/api/breeds/image/random";

// Esta función se ejecuta al hacer clic en el botón
function obtenerImagen() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      mostrarImagen(data.message);  // Pasamos la URL de la imagen al mostrarImagen
    })
    .catch(function(error) {
      console.log(error);
    });
}

function mostrarImagen(image_url) {
  document.getElementById("image").src = image_url;
}