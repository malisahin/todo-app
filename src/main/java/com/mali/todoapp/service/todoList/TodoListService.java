package com.mali.todoapp.service.todoList;

import com.mali.todoapp.domain.TodoList;

import java.util.List;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
public interface TodoListService {

    TodoList save(TodoList list);

    TodoList update(TodoList list);

    void remove(TodoList list);

    List<TodoList> findByUserId(Long userId);
}
