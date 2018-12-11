package com.mali.todoapp.service.todoList;

import com.mali.todoapp.domain.TodoList;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
public interface TodoListService {

    TodoList save(TodoList list);

    TodoList update(TodoList list);

    void remove(TodoList list);

}
