var usuarios = require('./../Datos/usuario.js');

var Usuario = function(nombre, apellido, telefono){
    this.nombre= nombre;
    this.apellido= apellido;
    this.telefono= telefono;	
}

// class methods
Usuario.prototype.agregarUsuario = function() {
  usuarios.push(this);
};

Usuario.prototype.consultarUsuarios = function() {
  return usuarios;
};

module.exports = Usuario;