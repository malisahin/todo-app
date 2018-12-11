package com.mali.todoapp.serviceView.todoItem;

import com.mali.todoapp.service.todoItem.TodoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public class TodoItemServiceView {

    @Autowired
    TodoItemService todoItemService;
}
