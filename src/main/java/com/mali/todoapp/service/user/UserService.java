package com.mali.todoapp.service.user;

import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.dto.UserDefDTO;

import javax.validation.ValidationException;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */

public interface UserService {

    UserDefDTO login(UserDef user) throws ValidationException;

    UserDefDTO create(UserDefDTO user) throws ValidationException;
}
