package com.mali.todoapp.endpoint.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mali.todoapp.BaseTest;
import com.mali.todoapp.domain.ProcessResults;
import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.dto.ProcessResultDTO;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.service.user.UserService;
import com.mali.todoapp.serviceView.user.UserServiceView;
import com.mali.todoapp.util.Mapper;
import org.junit.Assert;
import org.junit.Before;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(value = AuthEndpoint.class, secure = false)
public class AuthEndpointTest extends BaseTest {


    @Autowired
    public MockMvc mockMvc;


    @Autowired
    public ObjectMapper mapper;

    @Rule
    public final ExpectedException exception = ExpectedException.none();

    @Before
    public void setup() {

    }

    @MockBean
    UserServiceView userServiceViewMock;

    @MockBean
    UserService userServiceMock;


    @Test
    public void login_giveValidRequest_returnUserInfo() throws Exception {

        // given
        String email = "test@test.com";
        String password = "1234";

        UserDef user = new UserDef();
        user.setEmail(email);
        user.setPassword(password);


        UserDefDTO dto = new UserDefDTO();
        dto.email = email;
        dto.password = password;

        ProcessResults res = new ProcessResults(dto);
        //when
        Mockito.when(userServiceMock.login(any(UserDef.class))).thenReturn(user);
        Mockito.when(userServiceViewMock.login(any(UserDef.class))).thenReturn(res);


        // action
        MvcResult perform = mockMvc.perform(
                get("/login/" + email + "/" + password)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsBytes(new ProcessResults())))
                .andReturn();

        perform.getResponse();

        // verify
        Assert.assertNotEquals(perform.getResponse().getContentAsString(), "");
        ProcessResultDTO resultDTO = Mapper.convertJSONStringToObject(perform.getResponse().getContentAsString());
        Assert.assertEquals(resultDTO.objects.size(), 1);
    }
}