package com.mali.todoapp.serviceView.todoList;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.service.todoList.TodoListService;
import com.mali.todoapp.util.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public List<TodoListDTO> findByUserId(Long userId) {

        List<TodoList> todoListList = todoListService.findByUserId(userId);
        List<TodoListDTO> dtoList = new ArrayList<>();

        todoListList.forEach(todoList -> {
            dtoList.add(convertDomainToDto(todoList));
        });

        return dtoList;
    }

    public TodoListDTO update(TodoListDTO todoListDTO) {

        Optional<TodoList> todoList = todoListService.findById(todoListDTO.id);

        if (!todoList.isPresent()) {
            throw new NullPointerException(Messages.TODO_LIST_IS_NOT_FOUND);
        }

        return convertDomainToDto(todoList.get());
    }


/*
    public List<TodoListDTO> findByFilter(TodoListFilterDTO filter) {

        List<TodoListDTO> dtoList = new ArrayList<>();

        Page<TodoList> page = todoListService.findByFilter(filter);
        page.get().forEach(item -> {
            dtoList.add(convertDomainToDto(item));
        });

        return dtoList;
    }*/

    public void  deleteById(Long id){
        todoListService.deleteById(id);
    }


}