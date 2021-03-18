package com.mexfc.restapi.data.repository;

import com.mexfc.restapi.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
