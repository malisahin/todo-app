package com.mali.todoapp.service.todoList.impl;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.repository.TodoListRepository;
import com.mali.todoapp.service.todoList.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public class TodoListServiceImpl implements TodoListService {

    @Autowired
    private TodoListRepository listRepository;

    @Override
    public TodoList save(TodoList list) {
        return null;
    }

    @Override
    public TodoList update(TodoList list) {
        return null;
    }

    @Override
    public void remove(TodoList list) {

    }
}
