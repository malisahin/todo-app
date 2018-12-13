package com.mali.todoapp.service.todoItem;

import com.mali.todoapp.domain.TodoItem;
import com.mali.todoapp.dto.TodoItemDTO;
import com.mali.todoapp.repository.TodoItemRepository;
import com.mali.todoapp.util.Messages;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ValidationException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

/**
 * @author mali.sahin
 * @since 14.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(TodoItemService.class)
public class TodoItemServiceTest {

    @MockBean
    TodoItemRepository repository;

    @Autowired
    TodoItemService todoItemService;

    @Rule
    public final ExpectedException exception = ExpectedException.none();

    @Test
    public void save_sendValidParams_returnTodoItemDto() {

        TodoItem todoItem = new TodoItem();
        todoItem.setId(123L);
        todoItem.setListId(10L);
        todoItem.setExplanation("EXP");
        todoItem.setCreDate(new Date());

        TodoItemDTO dto = new TodoItemDTO();
        dto.listId = 10L;
        dto.explanation = "EXP";

        when(repository.save(any(TodoItem.class))).thenReturn(todoItem);

        TodoItemDTO created = todoItemService.save(dto);

        assertEquals(created.explanation, todoItem.getExplanation());
        assertNotNull(created.creDate);
    }

    @Test
    public void save_sendExplNull_returnException() {

        // given
        TodoItemDTO dto = new TodoItemDTO();
        dto.listId = 10L;
        dto.explanation = null;

        // validate
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.TODO_ITEM_EXP_CANNOT_BE_NULL);

        // perform
        todoItemService.save(dto);

    }

    @Test
    public void save_sendListIdNull_returnException() {

        // given
        TodoItemDTO dto = new TodoItemDTO();
        dto.explanation = "EXPL";

        // validate
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.TODO_ITEM_LIST_ID_CANNOT_BE_NULL);

        // perform
        todoItemService.save(dto);
    }

    @Test
    public void findByListId_sendValidListId_returnList() {

        // given
        Long listId = 10L;
        List<TodoItem> list = new ArrayList<>();

        TodoItem todo1 = new TodoItem();
        todo1.setId(1L);
        todo1.setListId(listId);
        list.add(todo1);

        TodoItem todo2 = new TodoItem();
        todo2.setId(2L);
        todo2.setListId(listId);
        list.add(todo2);

        when(repository.findByListId(listId)).thenReturn(list);

        List<TodoItemDTO> fetchedList = todoItemService.findByListId(listId);

        assertEquals(fetchedList.get(0).listId, listId);
        assertEquals(fetchedList.size(), list.size());
    }
}
