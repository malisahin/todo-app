package com.mali.todoapp.repository;

import com.mali.todoapp.domain.UserDef;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author mali.sahin
 * @since 8.12.2018.
 */

@Repository
public interface UserRepository extends JpaRepository<UserDef, Long> {

    UserDef findUserDefByEmail(String email);

}
