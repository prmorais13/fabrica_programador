UsuarioService = function () {
  this.usuarios = [];

  // Create
  this.adicionar = function (usuario) {
      this.usuarios.push(usuario);
  }

  // Retrieve
  this.buscarTodos = function () {
      return this.usuarios;
  }

  // Update
  this.alterar = function (indice, usuario) {
      //usuarioEncontrado = this.buscarPorIndice(indice);
      this.usuarios.splice(indice, 1, usuario);
  }

  // Delete
  this.excluir = function (indice) {
      this.usuarios.splice(indice, 1);
  }

  this.buscarPorIndice = function (indice) {
      return this.usuarios[indice];
  }
}