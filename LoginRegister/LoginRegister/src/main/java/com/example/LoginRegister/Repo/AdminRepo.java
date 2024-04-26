package com.example.LoginRegister.Repo;

import com.example.LoginRegister.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface AdminRepo extends JpaRepository<Admin,Integer>
{
    Optional<Admin> findOneByEmailAndPassword(String email, String password);
    Admin findByEmail(String email);
}