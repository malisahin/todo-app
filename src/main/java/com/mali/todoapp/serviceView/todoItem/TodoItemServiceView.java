package com.mali.todoapp.serviceView.todoItem;

import com.mali.todoapp.domain.TodoItem;
import com.mali.todoapp.dto.TodoItemDTO;
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
public class TodoItemServiceView {

    @Autowired
    TodoItemService todoItemService;


    public TodoItemDTO save(TodoItemDTO itemDTO) {

        validateTodoItem(itemDTO);

        TodoItem todoItem = convertDtoToDomain(itemDTO);

        todoItem.setCreDate(new Date());
        todoItemService.save(todoItem);

        Optional<TodoItem> optionalItem = todoItemService.find(todoItem.getId());

        if (!optionalItem.isPresent())
            throw new NullPointerException(Messages.TODO_ITEM_IS_NOT_FOUND);

        todoItem = optionalItem.get();

        return convertDomainToDto(todoItem);
    }

    private void validateTodoItem(TodoItemDTO item) {

    }


    public List<TodoItemDTO> findByListId(Long listId) {

        List<TodoItemDTO> dtoList = new ArrayList<>();

        List<TodoItem> todoItemList = todoItemService.findByListId(listId);

        todoItemList.forEach(item -> {
            dtoList.add(convertDomainToDto(item));
        });

        return dtoList;
    }

    public TodoItemDTO update(TodoItemDTO itemDTO) {
        Optional<TodoItem> optionalItem = todoItemService.find(itemDTO.id);

        if (!optionalItem.isPresent())
            throw new NullPointerException(Messages.TODO_ITEM_IS_NOT_FOUND);

        TodoItem updateItem = convertDtoToDomain(itemDTO);

        updateItem.setUpdDate(new Date());

        updateItem =  todoItemService.save(updateItem);


        return convertDomainToDto(updateItem);
    }

    public void deleteById(Long id) {
        todoItemService.deleteById(id);
    }


    private TodoItemDTO convertDomainToDto(TodoItem domain) {
        TodoItemDTO dto = new TodoItemDTO();
        dto.id = domain.getId();
        dto.explanation = domain.getExplanation();
        dto.listId = domain.getListId();
        dto.creDate = domain.getCreDate();

        return dto;
    }

    private TodoItem convertDtoToDomain(TodoItemDTO dto) {
        TodoItem domain = new TodoItem();
        domain.setId(dto.id);
        domain.setListId(dto.listId);
        domain.setExplanation(dto.explanation);

        return domain;
    }
}
