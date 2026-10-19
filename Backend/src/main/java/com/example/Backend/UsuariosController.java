package com.example.Backend;

import com.example.Backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuarios")

public class UsuariosController{
    
    @Autowired
    private UsuarioRepository usuarioRepo;

    @PostMapping("/cadastro")
    public Usuarios cadastrar(@RequestBody Usuarios novoUsuario) {
        return usuarioRepo.save(novoUsuario);
    }
    @PostMapping("/login")
    public String login(@RequestBody Usuarios login) {
        Optional<Usuarios> user = usuarioRepo.findByNUsuarioAndSenha(
                login.getNUsuario(), login.getSenha());
        return user.isPresent() ? "OK" : "FAIL";
    
    }
}