package com.mali.todoapp.service.todoList;

import com.mali.todoapp.dto.TodoListDTO;

import java.util.List;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
public interface TodoListService {

    TodoListDTO save(TodoListDTO todoListDTO);

    List<TodoListDTO> findByUserId(Long userId);

    TodoListDTO update(TodoListDTO todoListDTO);

    void deleteById(Long id);
}
