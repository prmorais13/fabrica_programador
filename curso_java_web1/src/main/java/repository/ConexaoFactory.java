package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoFactory {

	public static Connection conexao = null;
	
	public static Connection criarConexao() {	
		
		try {
			if(conexao == null ) {
				conexao = DriverManager.getConnection("jdbc:mysql://10.19.0.11:3306/curso_javaweb1_db", "root", "Paulo13");
			}
			
			return conexao;
		
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		return null;
	}

}
