const mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    tipoDocumento: String,
    documentoId: Number,
    nombresUsuario: String,
    apellidosUsuario: String,
    direccionUsuario: String,
    correoUsuario: String,
    telefonoFijoUsuario: Number,
    celularUsuario: Number,
    enlaceSitioWeb: String,
    descripcionPerfil: String,

});

module.exports = mongoose.model('usuario', UsuarioSchema, 'Usuarios');
