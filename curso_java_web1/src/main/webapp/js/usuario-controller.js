usuarioController = function () {
  this.usuarioService = new UsuarioService();
  
  // this.modoEdicao = false;

  // Renderiza o DOM
  this.renderizarTabelaUsuarios = function (usuarios) {
      dados = "";

      for (i = 0; i < usuarios.length; i++) {
          dados += "<tr>";
          dados += "<td>" + usuarios[i].id + "</td>";
          dados += "<td>" + usuarios[i].nome + "</td>";
          dados += "<td>" + usuarios[i].senha + "</td>";
          dados += "<td><input type='button' value='Excluir' onclick='uc.aoClicarExcluir(" + usuarios[i].id + ")'>";
          dados += "<input type='button' value='Editar' onclick='uc.aoClicarEditar(" + usuarios[i].id + ")'></td>";
          dados += "</tr>"
      }
      document.getElementById('tbUsuarios').innerHTML = dados;

  }

  // Eventos dos botões
  this.aoClicarSalvar = function () {
	  
	  var self = this;
	  
      //Leitura dos dados
	  idUsuario = document.getElementById('txtId').value;
      nomeUsuario = document.getElementById('txtUsuario').value;
      senhaUsuario = document.getElementById('txtSenha').value;
      
      // usu = "";

      // Adicionar ou altera ao vetor
      if (idUsuario != "") {
    	  
    	  usu = "id=" + idUsuario + "&nome=" + nomeUsuario + "&senha=" + senhaUsuario;
    	  
    	  this.usuarioService.alterar(usu, function() {
    		  window.alert("Alterado com sucesso!");
    		  // self.aoClicarListar();
    	  }, function(){
    		  window.alert("Erro ao alterar!");
    	  });
    	  
      } else {
    	  
    	  usu = "nome=" + nomeUsuario + "&senha=" + senhaUsuario;
    	  
          this.usuarioService.adicionar(usu, function() {
        	  window.alert("Adicionado com sucesso!");
        	  // self.aoClicarListar();
          }, function() {
        	  window.alert("Erro ao salvar!");
          });
      }

      this.aoClicarListar();
      this.limparCampos();
  }

  this.limparCampos = function () {
      // this.modoEdicao = false;
	  document.getElementById('txtId').value = "";
      document.getElementById('txtUsuario').value = "";
      document.getElementById('txtSenha').value = "";
  }

  this.aoClicarListar = function () {
	  
	  var self = this;
	  
      this.usuarioService.buscarTodos(function (usuarios) {
    	  self.renderizarTabelaUsuarios(usuarios);
      });
  }

  this.aoClicarExcluir = function (id) {
	  
	  if (window.confirm("Deseja excluir usuário id: " + id + "?")) {
	  
		  var self = this;
		  
	      this.usuarioService.excluir(id, function(){
	    	  // self.aoClicarListar();
	    	  window.alert("Excluído com sucesso!");
	      });
	  }
	  
	  this.aoClicarListar();

  }

  this.aoClicarEditar = function (id) {
      
	  // this.modoEdicao = true;
      //this.indiceEdicao = id;
      
      this.usuarioService.buscarPorId(id, function(usuarioEncontrado) {
    	  document.getElementById('txtId').value = usuarioEncontrado.id;
    	  document.getElementById('txtUsuario').value = usuarioEncontrado.nome;
    	  document.getElementById('txtSenha').value = usuarioEncontrado.senha;	  
      });
  }

  this.aoClicarCancelar = function () {
      this.limparCampos();
  }
}
