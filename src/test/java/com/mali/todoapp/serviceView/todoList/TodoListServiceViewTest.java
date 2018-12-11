package com.mali.todoapp.serviceView.todoList;

import com.mali.todoapp.service.todoList.TodoListService;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(TodoListServiceView.class)
public class TodoListServiceViewTest {

    @Autowired
    TodoListService todoListService;



}