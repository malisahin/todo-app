package com.mali.todoapp.endpoint.auth;

import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.dto.ProcessResultDTO;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.endpoint.BaseEndpoint;
import com.mali.todoapp.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.bind.ValidationException;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
@RestController
public class AuthEndpoint extends BaseEndpoint {

    @Autowired
    UserService userService;

    @GetMapping(value = "/login/{email}/{password}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<ProcessResultDTO> login(@PathVariable("email") String email, @PathVariable("password") String password) throws ValidationException {

        try {

            UserDefDTO user = userService.login(new UserDef(email, password));

            return new ResponseEntity<>(new ProcessResultDTO.Builder().addObject(user).build(), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(new ProcessResultDTO.Builder().addErrorMessage(e.getMessage()).build(), HttpStatus.BAD_REQUEST);

        }
    }
}
