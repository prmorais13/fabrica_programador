package controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Usuario;

@WebServlet(urlPatterns = { "/usucontroller", "/usuariocontroller"})
public class UsuarioController extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	List<Usuario> usuarios = new ArrayList<>();
	
	public void cadastrar(Usuario usuario) {
		this.usuarios.add(usuario);
	}
	
	public void excluir(Usuario usuario) {
		this.usuarios.remove(usuario);
	}
	
	public List<Usuario> buscarTodos() {
		return this.usuarios;
	}
	
	

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//leitura
		String nome = req.getParameter("nome");
		String senha = req.getParameter("senha");
		
		//instancia o objeto e seta os dados lidos	
		Usuario usuario = new Usuario();
		usuario.setNome(nome);
		usuario.setSenha(senha);
		
		//gravar
		this.cadastrar(usuario);
		//resposta
		resp.getWriter().println("Cadastrado: " + nome + " " + senha);
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.getWriter().println(this.buscarTodos());
	}
	
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.getWriter().println("Requesitou pelo PUT");
	}
	
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		resp.getWriter().println("Requesitou pelo DELETE");
	}

}
