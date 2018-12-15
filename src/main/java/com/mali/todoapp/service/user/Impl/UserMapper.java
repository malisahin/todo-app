package com.mali.todoapp.service.user.Impl;

import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.util.Messages;
import com.mali.todoapp.util.RegexValidation;

import javax.validation.ValidationException;

/**
 * @author mali.sahin
 * @since 13.12.2018.
 */
public class UserMapper {

     UserDefDTO convertDomainToDto(UserDef domain) throws ValidationException {

        UserDefDTO dto = new UserDefDTO();
        dto.name = domain.getName();
        dto.email = domain.getEmail();
        dto.id = domain.getId();
        dto.password = domain.getPassword();

        return dto;
    }

     UserDef convertDtoToDomain(UserDefDTO dto) {
        UserDef domain = new UserDef();
        domain.setEmail(dto.email);
        domain.setPassword(dto.password);
        domain.setName(dto.name);
        domain.setId(dto.id);

        return domain;
    }

     void validateUser(UserDef user) throws ValidationException {

        if (user.getName() == null || user.getName().isEmpty())
            throw new NullPointerException(Messages.USER_NAME_CANNOT_BE_NULL);

        if (user.getEmail() == null || user.getEmail().isEmpty())
            throw new NullPointerException(Messages.USER_EMAIL_CANNOT_BE_NULL);

        if (!RegexValidation.validateEmail(user.getEmail()))
            throw new ValidationException(Messages.USER_EMAIL_IS_INVALID);


        if (user.getPassword() == null || user.getPassword().isEmpty())
            throw new NullPointerException(Messages.USER_PASSWORD_CANNOT_BE_NULL);

        if (!RegexValidation.validatePassword(user.getPassword()))
            throw new ValidationException(Messages.USER_PASSWORD_IS_INVALID);

    }

}
