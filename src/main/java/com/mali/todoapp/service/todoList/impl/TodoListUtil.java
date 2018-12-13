package com.mali.todoapp.service.todoList.impl;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.util.Messages;

import javax.validation.ValidationException;
import java.util.Objects;

/**
 * @author mali.sahin
 * @since 13.12.2018.
 */
public class TodoListUtil {

    TodoListDTO convertDomainToDto(TodoList domain) {
        TodoListDTO dto = new TodoListDTO();
        dto.name = domain.getName();
        dto.id = domain.getId();
        dto.userId = domain.getUserId();
        dto.description = domain.getDescription();

        return dto;
    }

    TodoList convertDtoToDomain(TodoListDTO dto) {
        TodoList domain = new TodoList();
        domain.setDescription(dto.description);
        domain.setId(dto.id);
        domain.setName(dto.name);
        domain.setUserId(dto.userId);

        return domain;
    }

    void validateTodoListWhenCreate(TodoListDTO todoListDTO) {
        if (Objects.nonNull(todoListDTO.id))
            throw new ValidationException(Messages.TODO_LIST_ID_MUST_BE_NULL);

        validateTodoList(todoListDTO);
    }

    void validateTodoList(TodoListDTO todoListDTO) {

        if (Objects.isNull(todoListDTO.name))
            throw new ValidationException(Messages.TODO_LIST_NAME_CANNOT_BE_NULL);

        if (Objects.isNull(todoListDTO.userId))
            throw new ValidationException(Messages.TODO_LIST_USER_ID_CANNOT_BE_NULL);
    }

    void validateTodoListWhenUpdate(TodoListDTO todoListDTO) {
        if (Objects.isNull(todoListDTO.id))
            throw new ValidationException(Messages.TODO_LIST_ID_CANNOT_BE_NULL);

        validateTodoList(todoListDTO);
    }

}
