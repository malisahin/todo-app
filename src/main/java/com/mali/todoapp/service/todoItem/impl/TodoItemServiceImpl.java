package com.mali.todoapp.service.todoItem.impl;

import com.mali.todoapp.domain.TodoItem;
import com.mali.todoapp.repository.TodoItemRepository;
import com.mali.todoapp.service.todoItem.TodoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public class TodoItemServiceImpl implements TodoItemService {

    @Autowired
    private TodoItemRepository repository;

    public TodoItem save(TodoItem todoItem) {
        return repository.save(todoItem);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    /*public List<TodoItem> getTodoListItems(Long listId) {
        return repository.findByListId(listId);
    }*/
}
