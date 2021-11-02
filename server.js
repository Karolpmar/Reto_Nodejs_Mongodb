const mongoose = require('mongoose');
const express = require('express');
const UsuarioSchema = require("./Modelos/Usuario.js");

const app = express();
const router = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexión Base de datos

mongoose.connect("mongodb+srv://KarolPino:Sophia0518@clusterretonodejsmongod.fyc4h.mongodb.net/test")

//Operaciones CRUD

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

router.get('/',(req, res) => {
    res.send("Este es el inicio de mi primera API");
});

