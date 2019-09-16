let usuario = require('./Controlador_Usuarios');

const usuario1 = new usuario("Andres","Medina", 54613245);
const usuario2 = new usuario("Cosme", "landes", 51321515);
const usuario3 = new usuario("Fulanito", "Riaño", 54545454);

usuario1.agregarUsuario();
usuario2.agregarUsuario();
usuario3.agregarUsuario();
var usuarios = usuario1.consultarUsuarios();

console.log(usuarios);