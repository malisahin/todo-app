package com.mali.todoapp.service.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mali.todoapp.BaseTest;
import com.mali.todoapp.domain.UserDef;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.repository.UserRepository;
import com.mali.todoapp.util.Messages;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import javax.validation.ValidationException;

import static org.mockito.Mockito.when;


/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(value = UserService.class)
public class UserServiceTest extends BaseTest {

    @Autowired
    public MockMvc mockMvc;


    @Autowired
    public ObjectMapper mapper;

    @Rule
    public final ExpectedException exception = ExpectedException.none();

    @Autowired
    UserService userService;

    @MockBean
    UserRepository repository;

    private static final String USER_NAME = "TEST_USER";
    private static final String VALID_EMAIL = "TEST@TEST.COM";


    @Test
    public void create_giveEmptyUserName_throwNulPointerException() throws Exception {

        // given
        UserDefDTO user = new UserDefDTO();

        exception.expect(NullPointerException.class);
        exception.expectMessage(Messages.USER_NAME_CANNOT_BE_NULL);

        //action
        userService.create(user);

        //verify with Null pointer Exception
    }

    @Test
    public void create_giveEmptyEmail_throwNullPointerException() throws Exception {
        // given
        UserDefDTO user = new UserDefDTO();
        user.name = "test_user";

        exception.expect(NullPointerException.class);
        exception.expectMessage(Messages.USER_EMAIL_CANNOT_BE_NULL);

        //action
        userService.create(user);

        //verify with Null pointer Exception
    }

    @Test
    public void create_giveInvalidEmailPattern_throwValidationException() throws Exception {
        // given
        UserDefDTO user = new UserDefDTO();
        user.name = USER_NAME;
        user.email = "test_email";

        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.USER_EMAIL_IS_INVALID);

        //action
        userService.create(user);

        //verify with Validation Exception
    }

    @Test
    public void create_giveEmptyPassword_throwNullPointerException() throws Exception {

        // given
        UserDefDTO user = new UserDefDTO();
        user.name = USER_NAME;
        user.email = VALID_EMAIL;

        // verify
        exception.expect(NullPointerException.class);
        exception.expectMessage(Messages.USER_PASSWORD_CANNOT_BE_NULL);

        // action
        userService.create(user);

    }

    @Test
    public void create_giveInvalidPassword_throwValidationException() throws Exception {

        // given
        UserDefDTO user = new UserDefDTO();
        user.name = USER_NAME;
        user.email = VALID_EMAIL;
        user.password = "invalid_password";

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.USER_PASSWORD_IS_INVALID);

        // action
        userService.create(user);
    }


    @Test
    public void createUser_sendEmailExist_returnValidationException() throws Exception {


        // given
        UserDefDTO user = new UserDefDTO();
        user.name = USER_NAME;
        user.email = "TEST@TEST.COM";
        user.password = "Test123";

        when(repository.findUserDefByEmail(user.email)).thenReturn(new UserDef());

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.USER_EMAIL_ALREADY_EXIST);

        // action
        userService.create(user);


    }


}
