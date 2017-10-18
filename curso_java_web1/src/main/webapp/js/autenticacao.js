// Declaração da classe/objeto
Autenticacao = function () { }

// Declaração do método
Autenticacao.prototype.validarCampos = function () {
    usuario = document.getElementById('txtUsuario').value;
    senha = document.getElementById('txtSenha').value;

    if (usuario == "" || senha == "") {
        window.alert('Usuário e Senha devem ser informados!');
        return false;
    }

    return true;
}

// Estanciando o objeto
aut = new Autenticacao();