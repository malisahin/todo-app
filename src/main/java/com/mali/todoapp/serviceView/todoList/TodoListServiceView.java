package com.mali.todoapp.serviceView.todoList;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.service.todoList.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public class TodoListServiceView {

    @Autowired
    TodoListService todoListService;

    public TodoListDTO save(TodoListDTO todoListDTO) {
        TodoList todoList = convertDtoToDomain(todoListDTO);

        validateTodoList(todoList);

        todoList = todoListService.save(todoList);

        return convertDomainToDto(todoList);

    }

    private void validateTodoList(TodoList todoList) {

    }

    private TodoListDTO convertDomainToDto(TodoList domain) {
        TodoListDTO dto = new TodoListDTO();
        dto.name = domain.getName();
        dto.id = domain.getId();
        dto.userId = domain.getUserId();
        dto.description = domain.getDescription();

        return dto;
    }

    private TodoList convertDtoToDomain(TodoListDTO dto) {
        TodoList domain = new TodoList();
        domain.setDescription(dto.description);
        domain.setId(dto.id);
        domain.setName(dto.name);
        domain.setUserId(dto.userId);

        return domain;
    }


}
