package com.mali.todoapp.service.user.Impl;

import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.repository.UserRepository;
import com.mali.todoapp.service.user.UserService;
import com.mali.todoapp.util.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.Date;
import java.util.Objects;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
@Service
public class UserServiceImpl extends UserMapper implements UserService {

    @Autowired
    UserRepository userRepository;


    public UserDefDTO login(UserDef user) throws ValidationException {

        UserDef foundUser = userRepository.findUserDefByEmail(user.getEmail());

        if (foundUser == null) {
            throw new NullPointerException(Messages.USER_IS_NOT_FOUND);
        }

        UserDefDTO dto = convertDomainToDto(foundUser);

        dto.password = null;
        return dto;
    }


    @Override
    public UserDefDTO create(UserDefDTO user) throws ValidationException {

        UserDef userDef = convertDtoToDomain(user);
        validateUser(userDef);

        UserDef found = userRepository.findUserDefByEmail(user.email);

        if (Objects.nonNull(found))
            throw new ValidationException(Messages.USER_EMAIL_ALREADY_EXIST);


        userDef.setCreDate(new Date());

        userDef = userRepository.save(userDef);

        UserDefDTO dto = convertDomainToDto(userDef);
        dto.password = null;
        return dto;

    }
}
