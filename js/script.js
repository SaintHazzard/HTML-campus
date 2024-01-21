const btnObtenerDatosPerso = document.getElementById('btnObtenerDatosPerso');
const btnObtenerDatos = document.getElementById('btnObtenerDatos');
const btnObtenerDatosLabo = document.getElementById('btnObtenerDatosLabo');

function showData(tipo) {
  const datosDiv = document.getElementById('datos');

  const apiUrl = `/${tipo}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (typeof data === 'object' && data !== null) {
        const entries = Object.entries(data);

        const contenidoHTML = entries.map(([clave, valor]) => `
          <p>${clave}: ${valor}</p>
        `).join('');

        datosDiv.innerHTML = contenidoHTML;
      } else {
        console.error(`La respuesta del servidor para ${tipo} no es un objeto JSON:`, data);
      }
    })
    .catch(error => console.error(`Error al realizar la solicitud para ${tipo}:`, error));
}

btnObtenerDatosPerso.addEventListener('click', () => showData('infoPersonal'));
btnObtenerDatos.addEventListener('click', () => showData('academico'));
btnObtenerDatosLabo.addEventListener('click', () => showData('laboral'))