package com.mali.todoapp.service.todoItem;

import com.mali.todoapp.domain.TodoItem;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public interface TodoItemService {


    TodoItem save(TodoItem itemDTO);

    List<TodoItem> findByListId(Long listId);

    Optional<TodoItem> find(Long id);

    TodoItem update(TodoItem item);

    void deleteById(Long id);


}
