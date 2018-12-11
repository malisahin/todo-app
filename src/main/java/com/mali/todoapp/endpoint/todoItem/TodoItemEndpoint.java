package com.mali.todoapp.endpoint.todoItem;

import com.mali.todoapp.serviceView.todoItem.TodoItemServiceView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RestController
@RequestMapping(value = "todoItem")
public class TodoItemEndpoint {

    @Autowired
    TodoItemServiceView todoItemServiceView;
}
