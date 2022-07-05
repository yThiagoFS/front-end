package br.com.kairos.api_banco_kairos.EXTENSAO;

import org.springframework.data.repository.CrudRepository;

import br.com.kairos.api_banco_kairos.model.Juridico;



public interface IJuridico extends CrudRepository<Juridico, Integer>{
	
}
