const express = require('express');
const app = express();
const PORT = 3000;
const fs = require("fs");
const cors = require("cors");
const path = require('path');


app.use(express.json());
app.use(cors());
app.use(express.static('public'));


app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '..', 'index.html');
  res.sendFile(indexPath);
});

const rutaArchivoJSON = "./storage/informacion.json"




app.get("/academico", (req, res) => {
  try {

    const contenidoJSON = fs.readFileSync(rutaArchivoJSON, "utf-8");
    const datos = JSON.parse(contenidoJSON);
    const academico = datos.academica;
    res.json(academico);

  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});




// funtion = function madreAelix(algo) {
//   console.log(algo)
// }


// funtion("Su puta madre")