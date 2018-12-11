package com.mali.todoapp;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Rule;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */

@RunWith(SpringRunner.class)
@WebMvcTest(secure = false)
public class BaseTest {

    @Autowired
    public MockMvc mockMvc;


    @Autowired
    public ObjectMapper mapper;

    @Rule
    public final ExpectedException exception = ExpectedException.none();

    /*@Test
    public void base_toCallStaticLibs() throws Exception {

        // given

        when(getHello(any())).thenReturn("HELLO");

        // action

        String result = getHello("");

        // verify
        assertNotEquals(result, "");
        assertEquals(result,"HELLO");
    }

    private String getHello(String param) {
        return "HELLO";
    }*/


}
