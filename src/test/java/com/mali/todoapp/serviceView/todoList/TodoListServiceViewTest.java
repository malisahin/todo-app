package com.mali.todoapp.serviceView.todoList;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.service.todoList.TodoListService;
import com.mali.todoapp.util.Messages;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ValidationException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(TodoListServiceView.class)
public class TodoListServiceViewTest {

    @Autowired
    TodoListServiceView todoListServiceView;

    @MockBean
    TodoListService todoListService;

    private TodoListDTO todoListDTO;
    private TodoList todoList;


    @Rule
    public final ExpectedException exception = ExpectedException.none();

    @Before
    public void setUp() {
        todoListDTO = new TodoListDTO();
        todoListDTO.description = "TEST_DESCRIPTION";
        todoListDTO.name = "TEST_NAME";
        todoListDTO.userId = 123L;

        todoList = new TodoList();
        todoList.setDescription(todoListDTO.description);
        todoList.setUserId(todoListDTO.userId);
        todoList.setName(todoListDTO.name);

    }

    @Test
    public void save_sendValidParams_returnTodoListDto() {


        // given
        TodoListDTO emptyIdTodoListDto = new TodoListDTO();
        emptyIdTodoListDto.userId = todoList.getUserId();
        emptyIdTodoListDto.name = todoList.getName();
        emptyIdTodoListDto.description = todoList.getDescription();

        todoList.setId(123L);

        // when
        when(todoListService.save(any(TodoList.class))).thenReturn(todoList);

        // action
        TodoListDTO perform = todoListServiceView.save(emptyIdTodoListDto);


        // verify
        assertEquals(perform.description, todoList.getDescription());
        assertEquals(perform.name, todoList.getName());
        assertEquals(perform.userId, todoList.getUserId());

        assertNotNull(perform.id);
    }

    @Test
    public void save_sendNotEmptyId_returnException() {


        // given
        when(todoListService.save(todoList)).thenReturn(todoList);

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.USER_PASSWORD_IS_INVALID);

        // action
        TodoListDTO perform = todoListServiceView.save(todoListDTO);


    }
}