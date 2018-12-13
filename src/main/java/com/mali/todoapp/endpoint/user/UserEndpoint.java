package com.mali.todoapp.endpoint.user;

import com.mali.todoapp.dto.ProcessResultDTO;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.endpoint.BaseEndpoint;
import com.mali.todoapp.serviceView.user.UserServiceView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */

@RestController
@RequestMapping("/users/")
public class UserEndpoint extends BaseEndpoint {

    @Autowired
    UserServiceView userServiceView;

    @PostMapping(value = "", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProcessResultDTO> create(@RequestBody UserDefDTO userDto) {

        try {

            UserDefDTO user = userServiceView.create(userDto);

            return new ResponseEntity<>(new ProcessResultDTO.Builder().addObject(user).build(), HttpStatus.ACCEPTED);

        } catch (Exception e) {
            return new ResponseEntity<>(new ProcessResultDTO.Builder().addErrorMessage(e.getMessage()).build(), HttpStatus.BAD_REQUEST);

        }
    }

}
