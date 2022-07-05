package br.com.kairos.api_banco_kairos.EXTENSAO;

import org.springframework.data.repository.CrudRepository;

import br.com.kairos.api_banco_kairos.model.Fisico;


public interface IColaborador extends CrudRepository<Fisico, Integer>{
	
}

