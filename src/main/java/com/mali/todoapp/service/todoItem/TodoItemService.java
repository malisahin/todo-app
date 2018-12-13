package com.mali.todoapp.service.todoItem;

import com.mali.todoapp.dto.TodoItemDTO;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@Service
public interface TodoItemService {


    TodoItemDTO save(TodoItemDTO itemDTO);

    List<TodoItemDTO> findByListId(Long listId);

    TodoItemDTO update(TodoItemDTO item);

    void deleteById(Long id);


}
