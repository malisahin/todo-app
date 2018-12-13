package com.mali.todoapp.service.todoItem.impl;

import com.mali.todoapp.domain.TodoItem;
import com.mali.todoapp.dto.TodoItemDTO;
import com.mali.todoapp.repository.TodoItemRepository;
import com.mali.todoapp.service.todoItem.TodoItemService;
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
public class TodoItemServiceImpl extends TodoItemUtil implements TodoItemService {

    @Autowired
    private TodoItemRepository repository;

    public TodoItemDTO save(TodoItemDTO itemDTO) {

        validateTodoItem(itemDTO);

        TodoItem todoItem = convertDtoToDomain(itemDTO);

        todoItem.setCreDate(new Date());
        todoItem = repository.save(todoItem);

        return convertDomainToDto(todoItem);
    }


    public List<TodoItemDTO> findByListId(Long listId) {

        List<TodoItemDTO> dtoList = new ArrayList<>();

        List<TodoItem> todoItemList = repository.findByListId(listId);

        todoItemList.forEach(item -> {
            dtoList.add(convertDomainToDto(item));
        });

        return dtoList;
    }

    public TodoItemDTO update(TodoItemDTO itemDTO) {

        validateTodoItemWhenUpdate(itemDTO);

        Optional<TodoItem> optionalItem = repository.findById(itemDTO.id);

        if (!optionalItem.isPresent())
            throw new NullPointerException(Messages.TODO_ITEM_IS_NOT_FOUND);

        TodoItem updateItem = convertDtoToDomain(itemDTO);

        updateItem.setUpdDate(new Date());

        updateItem = repository.save(updateItem);


        return convertDomainToDto(updateItem);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }


}
