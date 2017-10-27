UsuarioService = function() {
	// Cria o array usuarios vazio
	this.usuarios = [];

	// Adiciona novos registros
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

	// Altera registros já existentes
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
	
	// Exclui registros
	this.excluir = function(id, cb) {
		
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				cb();
			}
		};
		
		xhttp.open("DELETE", "usucontroller?id=" + id, true);
		xhttp.send();
	}
	
	// Busca todos os registros
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

	// Busca registro por id
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