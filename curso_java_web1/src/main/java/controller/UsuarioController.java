package controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Usuario;
import repository.UsuarioRepository;
import repository.UsuarioRepositoryBanco;

@WebServlet(urlPatterns = { "/usucontroller", "/usuariocontroller" })
public class UsuarioController extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private UsuarioRepository usuarioRepository;

	@Override
	public void init() throws ServletException {

		this.usuarioRepository = new UsuarioRepositoryBanco();

		/*Usuario u1 = new Usuario();
		u1.setNome("Paulo");
		u1.setSenha("1313");

		Usuario u2 = new Usuario();
		u2.setNome("Fernanda");
		u2.setSenha("0404");

		Usuario u3 = new Usuario();
		u3.setNome("Patricia");
		u3.setSenha("1111");

		this.usuarioRepository.cadastrar(u1);
		this.usuarioRepository.cadastrar(u2);
		this.usuarioRepository.cadastrar(u3);*/

		super.init();
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// leitura
		String nome = req.getParameter("nome");
		String senha = req.getParameter("senha");

		// instancia o objeto e seta os dados lidos
		Usuario usuario = new Usuario();
		usuario.setNome(nome);
		usuario.setSenha(senha);

		// gravar
		this.usuarioRepository.cadastrar(usuario);
		// resposta
		resp.getWriter().println("Cadastrado: " + nome + " " + senha);
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		List<Usuario> lista = this.usuarioRepository.buscarTodos();
		String json = "[";

		for (int i = 0; i < lista.size(); i++) {
			Usuario u = lista.get(i);

			json += "{ \"id\": \"" + u.getId() + "\", \"nome\": \"" + u.getNome() + "\", \"senha\": \"" + u.getSenha() + "\"}";

			if (i < lista.size() - 1) {
				json += ",";
			}
		}

		json += "]";

		resp.getWriter().println(json);
	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// leitura
		int id = Integer.parseInt(req.getParameter("id"));
		String nome = req.getParameter("nome");
		String senha = req.getParameter("senha");

		/*// Busca o usuario a ser alterado
		Usuario usuarioAntigo = this.usuarioRepository.buscarPorIndice(indice);

		// Mostra os dados que serão alterados
		resp.getWriter().println("Dados originais Nome: " + usuarioAntigo.getNome() + " - Senha: " + usuarioAntigo.getSenha());*/

		// instancia o objeto e seta os dados lidos
		Usuario usuario = new Usuario();
		usuario.setId(id);
		usuario.setNome(nome);
		usuario.setSenha(senha);

		// Altera
		this.usuarioRepository.alterar(usuario);

		// Mostra os dados já alterados
		resp.getWriter().println("Dados alterados para Nome: " + usuario.getNome() + " - Senha: " + usuario.getSenha());
	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		int id = Integer.parseInt(req.getParameter("id"));

		try {
			this.usuarioRepository.excluir(id);
			resp.getWriter().println("Exclusão realizada com sucesso!");

		} catch (Exception e) {
			throw new ServletException("Não pode excluir!");
		}
	}

}
