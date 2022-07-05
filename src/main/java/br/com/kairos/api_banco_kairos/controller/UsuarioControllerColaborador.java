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

import br.com.kairos.api_banco_kairos.EXTENSAO.IColaborador;
import br.com.kairos.api_banco_kairos.model.Fisico;
import br.com.kairos.api_banco_kairos.model.Usuario;



@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping("/colaborador_fisico")
public class UsuarioControllerColaborador {

		@Autowired  //Joga os metodos para a extensao
		private IColaborador dao;
		
		@GetMapping
		public List<Fisico>  listaUsuario(){
			return (List<Fisico>) dao.findAll();
		}
		
		@PostMapping
		public Fisico criarUsuario(@RequestBody Fisico usuario) {
			Fisico usuarioNovo = dao.save(usuario);
			return usuarioNovo;
		}
		
		@PutMapping
		public Fisico editarUsuario(@RequestBody Fisico usuario) {
			Fisico usuarioAtualizado = dao.save(usuario);
			return usuarioAtualizado;
		}
		
		@DeleteMapping("/{id}")
		public Optional<Fisico> excluirUsuario (@PathVariable Integer id) {
			Optional<Fisico> usuario = dao.findById(id);
			dao.deleteById(id);
			return usuario;
		}
		
		
		//@RequestMapping("/usuario_juridico");
}

