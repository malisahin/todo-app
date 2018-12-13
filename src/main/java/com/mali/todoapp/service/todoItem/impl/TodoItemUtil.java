package com.mali.todoapp.service.todoItem.impl;

import com.mali.todoapp.domain.TodoItem;
import com.mali.todoapp.dto.TodoItemDTO;
import com.mali.todoapp.util.Messages;

import javax.validation.ValidationException;
import java.util.Objects;

/**
 * @author mali.sahin
 * @since 13.12.2018.
 */
public class TodoItemUtil {

    TodoItemDTO convertDomainToDto(TodoItem domain) {
        TodoItemDTO dto = new TodoItemDTO();
        dto.id = domain.getId();
        dto.explanation = domain.getExplanation();
        dto.listId = domain.getListId();
        dto.creDate = domain.getCreDate();

        return dto;
    }

    TodoItem convertDtoToDomain(TodoItemDTO dto) {
        TodoItem domain = new TodoItem();
        domain.setId(dto.id);
        domain.setListId(dto.listId);
        domain.setExplanation(dto.explanation);

        return domain;
    }

    void validateTodoItem(TodoItemDTO todo) {

        if (Objects.isNull(todo.explanation))
            throw new ValidationException(Messages.TODO_ITEM_EXP_CANNOT_BE_NULL);


        if (Objects.isNull(todo.listId))
            throw new ValidationException(Messages.TODO_ITEM_LIST_ID_CANNOT_BE_NULL);

    }

    void validateTodoItemWhenUpdate(TodoItemDTO todo){

        if (Objects.nonNull(todo.id))
            throw new ValidationException(Messages.TODO_ITEM_ID_CANNOT_BE_NULL);

    }
}
