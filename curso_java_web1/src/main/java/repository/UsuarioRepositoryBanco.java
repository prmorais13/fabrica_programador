package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Usuario;

public class UsuarioRepositoryBanco implements UsuarioRepository{
	
	private Connection conexao = ConexaoFactory.criarConexao();
	private PreparedStatement preparadorSQL;

	public void cadastrar(Usuario usuario) throws RepositoryException {
		
		try {
			this.preparadorSQL = this.conexao.prepareStatement("insert into usuario (nome, senha) values (?, ?)");
			this.preparadorSQL.setString(1, usuario.getNome());
			this.preparadorSQL.setString(2, usuario.getSenha());
			
			this.preparadorSQL.execute();
			this.preparadorSQL.close();
			
		} catch (SQLException e) {
			throw new RepositoryException(e);
		}

	}

	public void alterar(int indice, Usuario usuario) {
		

	}
	
	public void alterar(Usuario usuario) {
		
		try {
			this.preparadorSQL = this.conexao.prepareStatement("update usuario set nome = ?, senha = ? where id = ?");
			this.preparadorSQL.setString(1, usuario.getNome());
			this.preparadorSQL.setString(2, usuario.getSenha());
			this.preparadorSQL.setInt(3, usuario.getId());
			
			this.preparadorSQL.execute();
			this.preparadorSQL.close();
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
	}

	public void excluir(int id) {
		
		try {
			this.preparadorSQL = this.conexao.prepareStatement("delete from usuario where id = ?");
			this.preparadorSQL.setInt(1, id);
			
			this.preparadorSQL.execute();
			this.preparadorSQL.close();
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}

	}

	public List<Usuario> buscarTodos() {
		
		List<Usuario> usuarios = new ArrayList<>();
		
		try {
			this.preparadorSQL = this.conexao.prepareStatement("select * from usuario");
		
			ResultSet resultSet = this.preparadorSQL.executeQuery();
			
			while (resultSet.next()) {
				Usuario usuario = new Usuario();
				usuario.setId(resultSet.getInt("id"));
				usuario.setNome(resultSet.getString("nome"));
				usuario.setSenha(resultSet.getString("senha"));
				
				usuarios.add(usuario);
			}
			
			this.preparadorSQL.close();
			// resultSet.close();
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		return usuarios;
	}

	public Usuario buscarPorId(int id) {	
		
		Usuario usuario = null;
		
		try {
			this.preparadorSQL = this.conexao.prepareStatement("select * from usuario where id = ?");
			this.preparadorSQL.setInt(1, id);
			
			ResultSet resultSet = this.preparadorSQL.executeQuery();
			
			if (resultSet.next()) {
				usuario = new Usuario();
				usuario.setId(resultSet.getInt("id"));
				usuario.setNome(resultSet.getString("nome"));
				usuario.setSenha(resultSet.getString("senha"));
			}
			
			this.preparadorSQL.close();
			// resultSet.close();
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		return usuario;
	}

}
