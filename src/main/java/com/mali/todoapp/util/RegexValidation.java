package com.mali.todoapp.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public class RegexValidation {

    private static final Pattern VALID_EMAIL_ADDRESS_PATTERN =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    private static final Pattern VALID_PASSWORD_PATTERN
            //= Pattern.compile("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.])(?=\\S+$).{8,}$");
            = Pattern.compile("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{6,}$");

    public static boolean validateEmail(String emailStr) {
        Matcher matcher = VALID_EMAIL_ADDRESS_PATTERN.matcher(emailStr);
        return matcher.find();
    }

    public static boolean validatePassword(String password) {
        Matcher matcher = VALID_PASSWORD_PATTERN.matcher(password);
        return matcher.find();
    }
}
