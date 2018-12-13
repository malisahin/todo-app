package com.mali.todoapp.service.todoList;

import com.mali.todoapp.domain.TodoList;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.repository.TodoListRepository;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(TodoListService.class)
public class TodoListServiceTest {

    @MockBean
    TodoListRepository repository;

    @Autowired
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
        when(repository.save(any(TodoList.class))).thenReturn(todoList);

        // action
        TodoListDTO perform = todoListService.save(emptyIdTodoListDto);


        // verify
        assertEquals(perform.description, todoList.getDescription());
        assertEquals(perform.name, todoList.getName());
        assertEquals(perform.userId, todoList.getUserId());

        assertNotNull(perform.id);
    }

    @Test
    public void save_sendNotEmptyId_returnException() {

        // given
        todoList.setId(123L);
        todoListDTO.id = 123L;
        when(repository.save(any(TodoList.class))).thenReturn(todoList);

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.TODO_LIST_ID_MUST_BE_NULL);

        // action
        TodoListDTO perform = todoListService.save(todoListDTO);
    }

    @Test
    public void save_sendEmptyName_returnException() {

        // given
        todoList.setId(123L);

        todoListDTO.id = null;
        todoListDTO.name = null;
        when(repository.save(any(TodoList.class))).thenReturn(todoList);

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.TODO_LIST_NAME_CANNOT_BE_NULL);

        // action
        TodoListDTO perform = todoListService.save(todoListDTO);
    }

    @Test
    public void save_sendEmptyUserId_returnException() {

        // given
        todoList.setId(123L);

        todoListDTO.id = null;
        todoListDTO.name ="TEST";
        todoListDTO.userId = null;
        when(repository.save(any(TodoList.class))).thenReturn(todoList);

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.TODO_LIST_USER_ID_CANNOT_BE_NULL);

        // action
        TodoListDTO perform = todoListService.save(todoListDTO);
    }


    @Test
    public void findByUserId_sendValidUser_returnDtoList() {

        Long userId = 2L;

        List<TodoList> lists = new ArrayList<>();

        TodoList todo1 = new TodoList();
        todo1.setId(1L);
        todo1.setName("TODO_1");
        todo1.setUserId(userId);
        lists.add(todo1);

        TodoList todo2 = new TodoList();
        todo2.setId(2L);
        todo2.setName("TODO_2");
        todo2.setUserId(userId);
        lists.add(todo2);

        when(repository.findByUserId(userId)).thenReturn(lists);

        List<TodoListDTO> dtoList = todoListService.findByUserId(userId);

        assertEquals(dtoList.size(), lists.size());
        assertEquals(dtoList.get(0).userId, userId);

    }


    public void update_sendNotFoundList_returnException() {

        // given

        Optional<TodoList> optional = (null);
        todoListDTO.id = 1L;
        when(repository.findById(todoListDTO.id)).thenReturn(optional);

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.TODO_LIST_IS_NOT_FOUND);

        // action
        todoListService.update(todoListDTO);

    }

    @Test
    public void update_sendValidTodoList_returnUpdatedTodoListDTO() {

        // given

        TodoList list = new TodoList();
        list.setId(123L);
        list.setName("TEST");
        list.setUserId(345L);

        TodoListDTO listDTO = new TodoListDTO();
        listDTO.id = list.getId();
        listDTO.name = list.getName();
        listDTO.userId = list.getUserId();


        Optional<TodoList> optional = Optional.of(list);
        when(repository.findById(list.getId())).thenReturn(optional);
        when(repository.save(any(TodoList.class))).thenReturn(list);


        TodoListDTO updated = todoListService.update(listDTO);

        assertEquals(updated.id, list.getId());


    }
}