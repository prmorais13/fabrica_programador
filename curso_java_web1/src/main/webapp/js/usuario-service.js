UsuarioService = function() {
	this.usuarios = [];

	// Create
	this.adicionar = function(usuario) {
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				cb (JSON.parse(this.responseText));
			}
		};
		xhttp.open("POST", "usucontroller", true);
		xhttp.send();
		
		this.usuarios.push(usuario);
	}

	// Retrieve
	this.buscarTodos = function(cb) {

		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				cb (JSON.parse(this.responseText));
			}
		};
		xhttp.open("GET", "usucontroller", true);
		xhttp.send();

		return this.usuarios;
	}

	// Update
	this.alterar = function(indice, usuario) {
		// usuarioEncontrado = this.buscarPorIndice(indice);
		this.usuarios.splice(indice, 1, usuario);
	}

	// Delete
	this.excluir = function(indice) {
		this.usuarios.splice(indice, 1);
	}

	this.buscarPorIndice = function(indice) {
		return this.usuarios[indice];
	}
}