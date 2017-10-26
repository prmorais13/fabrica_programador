usuarioController = function () {
  this.usuarioService = new UsuarioService();
  
  this.modoEdicao = false;

  // Renderiza o DOM
  this.renderizarTabelaUsuarios = function (arrUsuarios) {
      dados = "";

      for (i = 0; i < arrUsuarios.length; i++) {
          dados += "<tr>";
          dados += "<td>" + arrUsuarios[i].id + "</td>";
          dados += "<td>" + arrUsuarios[i].nome + "</td>";
          dados += "<td>" + arrUsuarios[i].senha + "</td>";
          dados += "<td><input type='button' value='Excluir' onclick='uc.aoClicarExcluir(" + i + ")'>";
          dados += "<input type='button' value='Editar' onclick='uc.aoClicarEditar(" + i + ")'></td>";
          dados += "</tr>"
      }
      document.getElementById('tbUsuarios').innerHTML = dados;

  }

  // Eventos dos botões
  this.aoClicarSalvar = function () {
      //Leitura dos dados
      nomeUsuario = document.getElementById('txtUsuario').value;
      senhaUsuario = document.getElementById('txtSenha').value;

      // Constroi objeto usuario
      usu = { nome: nomeUsuario, senha: senhaUsuario };

      // Adicionar ou altera ao vetor
      if (this.modoEdicao) {
          this.usuarioService.alterar(this.indiceEdicao, usu);
      } else {
          this.usuarioService.adicionar(usu);
      }

      // this.aoClicarListar();
      this.limparCampos();
  }

  this.limparCampos = function () {
      this.modoEdicao = false;
      document.getElementById('txtUsuario').value = "";
      document.getElementById('txtSenha').value = "";
  }

  this.aoClicarListar = function () {
	  
	  var self = this;
	  
      usuarios = this.usuarioService.buscarTodos(function (usuarios) {
    	  // window.alert(usuarios);
    	  self.renderizarTabelaUsuarios(usuarios);
      });
  }

  this.aoClicarExcluir = function (indice) {
      this.usuarioService.excluir(indice);
      // this.aoClicarListar();
  }

  this.aoClicarEditar = function (indice) {
      this.modoEdicao = true;
      this.indiceEdicao = indice;
      usuarioEncontrado = this.usuarioService.buscarPorIndice(indice);
      document.getElementById('txtUsuario').value = usuarioEncontrado.nome;
      document.getElementById('txtSenha').value = usuarioEncontrado.senha;
  }

  this.aoClicarCancelar = function () {
      this.limparCampos();
  }
}
