package com.mali.todoapp.endpoint.todoItem;

import com.mali.todoapp.BaseTest;
import com.mali.todoapp.dto.TodoItemDTO;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.service.todoItem.TodoItemService;
import com.mali.todoapp.util.Mapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

/**
 * @author mali.sahin
 * @since 11.12.2018.
 */

@RunWith(SpringRunner.class)
@WebMvcTest(value = TodoItemEndpoint.class, secure = false)
public class TodoItemEndpointTest extends BaseTest {

    @MockBean
    TodoItemService todoItemService;

    private static final String BASE_URL = "/todoItem/";

    @Test
    public void save_verifyControllerSignature_returnOK() throws Exception {

        // given

        TodoItemDTO dto = new TodoItemDTO();
        dto.explanation = "TEST_DESCRIPTION";
        dto.id = 10L;

        when(todoItemService.save(any(TodoItemDTO.class))).thenReturn(dto);

        // action
        MvcResult perform = mockMvc.perform(
                post(BASE_URL)
                        .content(mapper.writeValueAsString(dto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andReturn();

        perform.getResponse();

        // verify
        assertNotEquals(perform.getResponse().getContentAsString(), "");
        assertEquals(perform.getResponse().getStatus(), HttpStatus.OK.value());

    }

    @Test
    public void findByListId() throws Exception {

        // given
        List<TodoItemDTO> todoList = new ArrayList<>();

        todoList.add(new TodoItemDTO());
        todoList.add(new TodoItemDTO());
        todoList.add(new TodoItemDTO());
        todoList.add(new TodoItemDTO());


        // when
        when(todoItemService.findByListId(any(Long.TYPE))).thenReturn(todoList);

        MvcResult perform = mockMvc.perform(
                get(BASE_URL + "1233/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andReturn();

        perform.getResponse();

        String content = perform.getResponse().getContentAsString();
        // verify
        assertNotEquals(content, "");
        assertEquals(perform.getResponse().getStatus(), HttpStatus.OK.value());

        List<TodoListDTO> resultList = Mapper.convertJsonStringToListObject(content, TodoListDTO.class);
        assertEquals(resultList.size(), todoList.size());
    }

    @Test
    public void update() throws Exception {
        // given
        TodoItemDTO todoItemDTO = new TodoItemDTO();

        // when
        when(todoItemService.update(any(TodoItemDTO.class))).thenReturn(todoItemDTO);

        MvcResult perform = mockMvc.perform(
                put(BASE_URL)
                        .content(mapper.writeValueAsString(todoItemDTO))
                        .contentType(MediaType.APPLICATION_JSON))
                .andReturn();

        perform.getResponse();

        String content = perform.getResponse().getContentAsString();

        // verify
        assertNotEquals(content, "");
        assertEquals(perform.getResponse().getStatus(), HttpStatus.OK.value());
    }

    @Test
    public void delete() {
    }
}

/*
*
*


    @Test
    public void update_verifyControllerSignature_returnOK() throws Exception {

        // given
        TodoListDTO todoList = new TodoListDTO();

        // when
        when(todoListServiceView.update(any(TodoListDTO.class))).thenReturn(todoList);

        MvcResult perform = mockMvc.perform(
                put("/todoList/")
                        .content(mapper.writeValueAsString(todoList))
                        .contentType(MediaType.APPLICATION_JSON))
                .andReturn();

        perform.getResponse();

        String content = perform.getResponse().getContentAsString();

        // verify
        assertNotEquals(content, "");
        assertEquals(perform.getResponse().getStatus(), HttpStatus.OK.value());
    }

*/
