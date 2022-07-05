package br.com.kairos.api_banco_kairos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.kairos.api_banco_kairos.EXTENSAO.IJuridico;
import br.com.kairos.api_banco_kairos.model.Juridico;





@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/colaborador_juridico")

public class UsuarioControllerJuridico {

			@Autowired  //Joga os metodos para a extensao
			private IJuridico dao;
			
			@GetMapping
			public List<Juridico>  listaUsuario(){
				return (List<Juridico>) dao.findAll();
			}
			
			@PostMapping
			public Juridico criarUsuario(@RequestBody Juridico usuario) {
				Juridico usuarioNovo = dao.save(usuario);
				return usuarioNovo;
			}
			
			@PutMapping
			public Juridico editarUsuario(@RequestBody Juridico usuario) {
				Juridico usuarioAtualizado = dao.save(usuario);
				return usuarioAtualizado;
			}
			
			@DeleteMapping("/{id}")
			public Optional<Juridico> excluirUsuario (@PathVariable Integer id) {
				Optional<Juridico> usuario = dao.findById(id);
				dao.deleteById(id);
				return usuario;
			}
			
			
			//@RequestMapping("/usuario_juridico");
}

