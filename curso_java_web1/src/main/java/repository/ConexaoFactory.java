package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoFactory {

	public static Connection conexao = null;
	
	public static Connection criarConexao() {	
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			
			if(conexao == null ) {
				conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/curso_javaweb1_db?useSSL=false", "root", "Paulo13");
			}
			
			return conexao;
		
		} catch (SQLException e) {	
			e.printStackTrace();
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return null;
	}

}
