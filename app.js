const express = require('express');
const app = express();
const PORT = 3000;
const fs = require("fs");
const cors = require("cors");
const path = require('path');


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));
// app.use('/js', express.static(path.join(__dirname, 'js'), { extensions: ['js'] }));

// Manejador para la ruta raíz
app.get('/info', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

// app.get('script.js', (req, res) => {
//   const indexPath = path.join(__dirname, 'js/script.js');  
//   res.sendFile(indexPath);
// });
const rutaArchivoJSON = "./storage/informacion.json"


function obtenerInformacion(categoria, res) {
  try {
    const contenidoJSON = fs.readFileSync(rutaArchivoJSON, 'utf-8');
    const datos = JSON.parse(contenidoJSON);

    if (datos && datos[categoria]) {
      const informacion = datos[categoria];
      res.json(informacion);
    } else {
      res.status(404).send(`No se encontraron datos para la categoría ${categoria}`);
    }
  } catch (error) {
    console.error(`Error al leer el archivo JSON para la categoría ${categoria}:`, error);
    res.status(500).send('Error interno del servidor');
  }
}

app.get('/infoPersonal', (req, res) => {
  obtenerInformacion('infoPersonal', res);
});

app.get('/academico', (req, res) => {
  obtenerInformacion('academica', res);
});

app.get('/laboral', (req, res) => {
  obtenerInformacion('laboral', res);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});




// funtion = function madreAelix(algo) {
//   console.log(algo)
// }


// funtion("Su puta madre")