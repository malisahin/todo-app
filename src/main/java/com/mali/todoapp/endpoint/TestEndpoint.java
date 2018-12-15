package com.mali.todoapp.endpoint;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mali.sahin
 * @since 15.12.2018.
 */
@RestController
@RequestMapping("/test/")
public class TestEndpoint {

    @GetMapping("")
    public String test() {
        return "Todo App is running...";
    }
}
