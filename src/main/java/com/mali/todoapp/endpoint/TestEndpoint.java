package com.mali.todoapp.endpoint;

import com.mali.todoapp.dto.UserDefDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mali.sahin
 * @since 12.12.2018.
 */
@RestController
@RequestMapping("test/")
public class TestEndpoint {

    @PostMapping(value = "", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> create(@RequestBody UserDefDTO userDto) {

        try {

            return new ResponseEntity<>("HELLO WORLD", HttpStatus.ACCEPTED);

        } catch (Exception e) {
            return new ResponseEntity<>("ERROR", HttpStatus.BAD_REQUEST);

        }
    }

}
