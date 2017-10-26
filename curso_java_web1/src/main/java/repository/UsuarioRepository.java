package repository;

import java.util.List;

import model.Usuario;

public interface UsuarioRepository {
	
	public void cadastrar(Usuario usuario) throws RepositoryException;

	public void alterar(int id, Usuario usuario);

	public void excluir(int id);

	public List<Usuario> buscarTodos();

	public Usuario buscarPorId(int id);

	public void alterar(Usuario usuario);

}
