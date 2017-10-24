package repository;

import java.sql.Connection;
import java.util.List;

import model.Usuario;

public class UsuarioRepositoryBanco implements UsuarioRepository{
	
	Connection conexao = ConexaoFactory.criarConexao();

	public void cadastrar(Usuario usuario) {

	}

	public void alterar(int indice, Usuario usuario) {

	}

	public void excluir(int indice) {

	}

	public List<Usuario> buscarTodos() {
		return null;
	}

	public Usuario buscarPorIndice(int indice) {
		return null;
	}

}
