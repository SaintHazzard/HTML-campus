const btnObtenerDatos = document.getElementById('btnObtenerDatos');
btnObtenerDatos.addEventListener('click', () => {
  const datosAcademicosDiv = document.getElementById('datosAcademicos');
  fetch('/academico')
    .then(response => response.json())
    .then(data => {
      if (typeof data === 'object' && data !== null) {
        // Obtener un array de pares [clave, valor]
        const entries = Object.entries(data);

        // Iterar sobre los pares y construir el contenido del div
        const contenidoHTML = entries.map(([clave, valor]) => `
            <p>${clave}: ${valor}</p>
          `).join('');

        // Actualizar el contenido del div con los datos de la solicitud
        datosAcademicosDiv.innerHTML = contenidoHTML;
      } else {
        // Manejar el caso en el que la respuesta no es un objeto JSON
        console.error('La respuesta del servidor no es un objeto JSON:', data);
      }
    })
    .catch(error => console.error('Error al realizar la solicitud:', error));
});