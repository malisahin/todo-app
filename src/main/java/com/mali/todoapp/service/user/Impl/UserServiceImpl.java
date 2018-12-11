package com.mali.todoapp.service.user.Impl;

import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.repository.UserRepository;
import com.mali.todoapp.service.user.UserService;
import com.mali.todoapp.util.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDef login(UserDef user) {
        UserDef foundUser = userRepository.findUserDefByEmail(user.getEmail());

        if (foundUser == null) {
            throw new NullPointerException(Messages.USER_IS_NOT_FOUND);
        }

        return foundUser;
    }

    @Override
    public UserDef create(UserDef userDef) {
        return userRepository.save(userDef);
    }
}
