package br.com.kairos.api_banco_kairos.EXTENSAO;

import org.springframework.data.repository.CrudRepository;

import br.com.kairos.api_banco_kairos.model.Usuario;


								//Traz alguns metodos 
public interface IUsuario extends CrudRepository<Usuario, Integer>{

}
