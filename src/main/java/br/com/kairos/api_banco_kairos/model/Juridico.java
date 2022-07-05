package br.com.kairos.api_banco_kairos.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "colaborador_juridico")
public class Juridico {
	
	
		@Id // Especifica que é o primary key
		@GeneratedValue(strategy = GenerationType.IDENTITY) // Diz que o campo ID vai ser autoincrement
		@Column(name = "id") //Faz referencia ao campo que esta no banco
		private Integer id;
		
		@Column(name = "nome", length = 200, nullable =true) //Faz referencia ao campo que esta no banco
		private String nome;
		
		@Column(name = "email", length = 200, nullable =true) //Faz referencia ao campo que esta no banco
		private String email;
		
		@Column(name = "senha", columnDefinition="TEXT", nullable =true) //Faz referencia ao campo que esta no banco
		private String senha;
		
		@Column(name = "cnpj", length=14, nullable = true) //Faz referencia ao campo que esta no banco
		private Integer cnpj;
		

		@Column(name = "data_abertura",columnDefinition = "DATE ​​DEFAULT CURRENT_DATE", nullable = true) //Faz referencia ao campo que esta no banco
		private Date data_abertura;
		
		
		

		public Integer getCnpj() {
			return cnpj;
		}

		public void setCnpj(Integer cnpj) {
			this.cnpj = cnpj;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}
		
		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}
		
		public Date getData_abertura() {
			return data_abertura;
		}
		
		public void setData_abertura(Date data_abertura) {
			this.data_abertura = data_abertura;
		}
		
}
