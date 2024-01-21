const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 5500;

const rutaArchivoJSON = "/storage/informacion.json"

app.use(express.json());


app.get("/academico", (req, res) => {
  try {

    const contenidoJSON = fs.readFileSync(rutaArchivoJSON, "utf-8");
    const datos = JSON.parse(contenidoJSON);
    const academico = datos.academica;
    console.log(academico)
    res.json(academico);

  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    res.status(500).send("Error interno del servidor");
  }
});





// funtion = function madreAelix(algo) {
//   console.log(algo)
// }


// funtion("Su puta madre")