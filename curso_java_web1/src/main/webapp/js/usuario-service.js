UsuarioService = function() {
	this.usuarios = [];

	// Create
	this.adicionar = function(usuario, sucesso, erro) {
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			
			if (this.readyState == 4) {
				if (this.status == 200) {
					sucesso();
				} else {
					erro();
				}
			}
		};
		
		xhttp.open("POST", "usucontroller", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(usuario);	
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
	/*this.alterar = function(indice, usuario) {
		// usuarioEncontrado = this.buscarPorIndice(indice);
		this.usuarios.splice(indice, 1, usuario);
	}*/
	
	this.alterar = function(usuario, sucesso, erro) {
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			
			if (this.readyState == 4) {
				if (this.status == 200) {
					sucesso();
				} else {
					erro();
				}
			}
		};
		
		xhttp.open("PUT", "usucontroller?" + usuario, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
	}

	// Delete
	this.excluir = function(id, cb) {
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				cb();
			}
		};
		
		xhttp.open("DELETE", "usucontroller?id=" + id, true);
		xhttp.send();
		//this.usuarios.splice(indice, 1);
	}

	//Busca por id
	this.buscarPorId = function(id, cb) {
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				cb (JSON.parse(this.responseText));
			}
		};
		
		xhttp.open("GET", "usucontroller?id=" + id, true);
		xhttp.send();

	}
}