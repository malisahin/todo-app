package com.mali.todoapp.endpoint.todoList;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mali.todoapp.BaseTest;
import com.mali.todoapp.dto.TodoListDTO;
import com.mali.todoapp.serviceView.todoList.TodoListServiceView;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(value = TodoListEndpoint.class, secure = false)
public class TodoListEndpointTest extends BaseTest {


    @Autowired
    public MockMvc mockMvc;


    @Autowired
    public ObjectMapper mapper;

    @Rule
    public final ExpectedException exception = ExpectedException.none();

    @MockBean
    TodoListServiceView todoListServiceView;

    @Test
    public void save_sendValidTodoListDto_returnSuccess() throws Exception {

        // given

        TodoListDTO dto = new TodoListDTO();

        MvcResult perform = mockMvc.perform(
                post("/todoList")
                        .content(mapper.writeValueAsString(dto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andReturn();

        perform.getResponse();


    }
}
