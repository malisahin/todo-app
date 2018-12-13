package com.mali.todoapp.service.todoList.impl;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.repository.TodoListRepository;
import com.mali.todoapp.service.todoList.TodoListService;
import com.mali.todoapp.util.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public class TodoListServiceImpl extends TodoListUtil implements TodoListService {


    @Autowired
    private TodoListRepository listRepository;

    @Override
    public void deleteById(Long id) {
        listRepository.deleteById(id);
    }

    @Override
    public TodoListDTO save(TodoListDTO todoListDTO) {

        validateTodoListWhenCreate(todoListDTO);

        TodoList todoList = convertDtoToDomain(todoListDTO);

        todoList.setCreDate(new Date());
        todoList = listRepository.save(todoList);

        return convertDomainToDto(todoList);
    }


    @Override
    public List<TodoListDTO> findByUserId(Long userId) {

        List<TodoList> todoListList = listRepository.findByUserId(userId);
        List<TodoListDTO> dtoList = new ArrayList<>();

        todoListList.forEach(todoList -> {
            dtoList.add(convertDomainToDto(todoList));
        });

        return dtoList;
    }

    @Override
    public TodoListDTO update(TodoListDTO todoListDTO) {

        validateTodoListWhenUpdate(todoListDTO);

        Optional<TodoList> todoList = listRepository.findById(todoListDTO.id);

        if (!todoList.isPresent()) {
            throw new NullPointerException(Messages.TODO_LIST_IS_NOT_FOUND);
        }

        TodoList willUpdate = convertDtoToDomain(todoListDTO);

        willUpdate.setUpdDate(new Date());

        TodoList updated = listRepository.save(willUpdate);

        return convertDomainToDto(updated);
    }


}
