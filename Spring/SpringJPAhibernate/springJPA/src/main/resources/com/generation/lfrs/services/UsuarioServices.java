package com.generation.lfrs.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import com.generation.lfrs.models.UsuarioModels;
import com.generation.lfrs.repositories.UsuarioRepositories;

@Service
public class UsuarioServices {
	@Autowired
	UsuarioRepositories usuariorepositories;
	public ArrayList<UsuarioModels> obtenerususarios(){
		return (ArrayList<UsuarioModels>)usuariorepositories.findAll();
	
    }

	public UsuarioModels guardarUsuario(UsuarioModels usuario){
        return usuariorepositories.save(usuario);
    }

	
}
