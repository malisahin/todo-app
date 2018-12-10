package com.mali.todoapp.serviceView.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mali.todoapp.BaseTest;
import com.mali.todoapp.dto.UserDefDTO;
import com.mali.todoapp.service.user.UserService;
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


/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(value = UserServiceView.class)
public class UserServiceViewTest extends BaseTest {

    @Autowired
    public MockMvc mockMvc;


    @Autowired
    public ObjectMapper mapper;

    @Rule
    public final ExpectedException exception = ExpectedException.none();

    @Autowired
    UserServiceView userServiceViewMock;

    @MockBean
    UserService userServiceMock;

    private static final String USER_NAME = "TEST_USER";
    private static final String VALID_EMAIL = "TEST@TEST.COM";


    @Test
    public void create_giveEmptyUserName_throwNulPointerException() {

        // given
        UserDefDTO user = new UserDefDTO();

        exception.expect(NullPointerException.class);
        exception.expectMessage(Messages.userNameCannotBeNull);

        //action
        userServiceViewMock.create(user);

        //verify with Null pointer Exception
    }

    @Test
    public void create_giveEmptyEmail_throwNullPointerException() {
        // given
        UserDefDTO user = new UserDefDTO();
        user.name = "test_user";

        exception.expect(NullPointerException.class);
        exception.expectMessage(Messages.userEmailCannotBeNull);

        //action
        userServiceViewMock.create(user);

        //verify with Null pointer Exception
    }

    @Test
    public void create_giveInvalidEmailPattern_throwValidationException() {
        // given
        UserDefDTO user = new UserDefDTO();
        user.name = USER_NAME;
        user.email = "test_email";

        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.userEmailIsInvalid);

        //action
        userServiceViewMock.create(user);

        //verify with Validation Exception
    }

    @Test
    public void create_giveEmptyPassword_throwNullPointerException() {

        // given
        UserDefDTO user = new UserDefDTO();
        user.name = USER_NAME;
        user.email = VALID_EMAIL;

        // verify
        exception.expect(NullPointerException.class);
        exception.expectMessage(Messages.userPasswordCannotBeNull);

        // action
        userServiceViewMock.create(user);

    }

    @Test
    public void create_giveInvalidPassword_throwValidationException() {

        // given
        UserDefDTO user = new UserDefDTO();
        user.name = USER_NAME;
        user.email = VALID_EMAIL;
        user.password = "invalid_password";

        // verify
        exception.expect(ValidationException.class);
        exception.expectMessage(Messages.userPasswordIsInvalid);

        // action
        userServiceViewMock.create(user);
    }


}
