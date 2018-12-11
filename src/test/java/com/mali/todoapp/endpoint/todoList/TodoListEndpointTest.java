package com.mali.todoapp.endpoint.todoList;

import com.mali.todoapp.BaseTest;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.serviceView.todoList.TodoListServiceView;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(value = TodoListEndpoint.class, secure = false)
public class TodoListEndpointTest extends BaseTest {


    @MockBean
    TodoListServiceView todoListServiceView;


    @Test
    public void save_verifyControllerSignature_returnOK() throws Exception {

        // given

        TodoListDTO dto = new TodoListDTO();
        dto.description = "TEST_DESCRIPTION";
        dto.id = 10L;

        when(todoListServiceView.save(any(TodoListDTO.class))).thenReturn(dto);

        // action
        MvcResult perform = mockMvc.perform(
                post("/todoList/")
                        .content(mapper.writeValueAsString(dto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andReturn();

        perform.getResponse();

        // verify
        assertNotEquals(perform.getResponse().getContentAsString(), "");
        assertEquals(perform.getResponse().getStatus(), HttpStatus.OK.value());
    }

    @Test
    public void findbyUserId_verifyControllerSignature_returnOK() throws Exception {

        // given
        List<TodoListDTO> todoList = new ArrayList<>();

        todoList.add(new TodoListDTO());
        todoList.add(new TodoListDTO());
        todoList.add(new TodoListDTO());
        todoList.add(new TodoListDTO());

        // when
        when(todoListServiceView.findByUserId(any(Long.TYPE))).thenReturn(todoList);

        MvcResult perform = mockMvc.perform(
                get("/todoList/1233/")
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

}
