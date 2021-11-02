const mongoose = require('mongoose');
const express = require('express');

const app = express();
const router = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexión Base de datos

mongoose.connect("mongodb+srv://KarolPino:Sophia0518@clusterretonodejsmongod.fyc4h.mongodb.net/test")


