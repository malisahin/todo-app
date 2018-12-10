package com.mali.todoapp.endpoint.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mali.todoapp.BaseTest;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.serviceView.user.UserServiceView;
import com.mali.todoapp.util.Mapper;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;


/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(UserEndpoint.class)
public class UserEndpointTest extends BaseTest {


    @Autowired
    public MockMvc mockMvc;


    @Autowired
    public ObjectMapper mapper;

    @Rule
    public final ExpectedException exception = ExpectedException.none();

    @MockBean
    UserServiceView userServiceViewMock;


    private static String email = "test@test.com";
    private static String userName = "test_user";
    private static String password = "user_password";

    @Test
    public void createUser_sendValidParameters_returnSuccessAndUserInfo() throws Exception {

        // given
        UserDefDTO userDto = new UserDefDTO();
        userDto.email = email;
        userDto.name = userName;
        userDto.password = password;

        // wheb
        Mockito.when(userServiceViewMock.create(any(UserDefDTO.class))).thenReturn(userDto);


        //action
        MvcResult perform = mockMvc.perform(
                post("/user")
                        .content(mapper.writeValueAsString(userDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
        ).andReturn();

        perform.getResponse();

        // verify
        Assert.assertNotEquals(perform.getResponse().getContentAsString(), "");

        String output = perform.getResponse().getContentAsString();

        UserDefDTO outputUser = Mapper.convertJsonStringToProcessResultSingleObject(output, UserDefDTO.class);

        Assert.assertEquals(outputUser.name, userName);
        Assert.assertEquals(outputUser.email, email);
        Assert.assertEquals(outputUser.password, password);

    }
}
