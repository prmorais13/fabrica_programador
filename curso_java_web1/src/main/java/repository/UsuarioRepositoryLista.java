package repository;

import java.util.ArrayList;
import java.util.List;

import model.Usuario;

public class UsuarioRepositoryLista implements UsuarioRepository{

	List<Usuario> usuarios = new ArrayList<>();

	public void cadastrar(Usuario usuario) {
		this.usuarios.add(usuario);
	}

	public void alterar(int indice, Usuario usuario) {
		this.usuarios.set(indice, usuario);
	}

	public void excluir(int indice) {
		this.usuarios.remove(indice);
	}

	public List<Usuario> buscarTodos() {
		return this.usuarios;
	}

	public Usuario buscarPorIndice(int indice) {
		return this.usuarios.get(indice);
	}

	@Override
	public void alterar(Usuario usuario) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Usuario buscarPorId(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
