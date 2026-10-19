package com.example.Backend.repository;

import com.example.Backend.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuarios, Long> {
    Optional<Usuarios> findByNUsuarioAndSenha(String nUsuario, String senha);
}
