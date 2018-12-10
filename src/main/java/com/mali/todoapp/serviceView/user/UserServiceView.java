package com.mali.todoapp.serviceView.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mali.todoapp.domain.ProcessResults;
import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.service.user.UserService;
import com.mali.todoapp.util.Messages;
import com.mali.todoapp.util.RegexValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
@Service
public class UserServiceView {

    ObjectMapper mapper = new ObjectMapper();

    @Autowired
    UserService userService;

    public ProcessResults login(UserDef user) throws ValidationException {
        user = userService.login(user);

        user.setPassword(null);
        ProcessResults res = new ProcessResults(convertDomainToDto(user));
        return res;
    }

    private UserDefDTO convertDomainToDto(UserDef domain) throws ValidationException {
        validateUser(domain);

        UserDefDTO dto = new UserDefDTO();
        dto.name = domain.getName();
        dto.email = domain.getEmail();
        dto.id = domain.getId();
        dto.password = domain.getPassword();

        return dto;
    }

    private UserDef convertDtoToDomain(UserDefDTO dto) {
        UserDef domain = new UserDef();
        domain.setEmail(dto.email);
        domain.setPassword(dto.password);
        domain.setName(dto.name);
        domain.setId(dto.id);

        return domain;
    }

    private void validateUser(UserDef user) throws ValidationException {

        if (user.getName() == null || user.getName().isEmpty())
            throw new NullPointerException(Messages.userNameCannotBeNull);

        if (user.getEmail() == null || user.getEmail().isEmpty())
            throw new NullPointerException(Messages.userEmailCannotBeNull);

        if (!RegexValidation.validateEmail(user.getEmail()))
            throw new ValidationException(Messages.userEmailIsInvalid);


        if(user.getPassword() == null || user.getPassword().isEmpty())
            throw new NullPointerException(Messages.userPasswordCannotBeNull);

        if(!RegexValidation.validatePassword(user.getPassword()))
            throw new ValidationException(Messages.userPasswordIsInvalid);

    }


    public ProcessResults create(UserDefDTO user) {
        UserDef userDef = convertDtoToDomain(user);
        validateUser(userDef);

        userDef = userService.create(userDef);

        return new ProcessResults(userDef);

    }
}
