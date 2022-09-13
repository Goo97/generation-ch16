package com.generation.lfrs.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.lfrs.models.UsuarioModels;
import com.generation.lfrs.services.UsuarioServices;

@RestController
@RequestMapping("/usuario")

public class UsuarioControllers {
	@Autowired
	UsuarioServices usuarioservices; 
	@GetMapping()
	public ArrayList<UsuarioModels> obtenerUsuarios(){
        return usuarioservices.obtenerususarios();
    }

	@PostMapping()
	public UsuarioModels guardarUsuario(@RequestBody UsuarioModels usuario){
        return this.usuarioservices.guardarUsuario(usuario);
    }


}
