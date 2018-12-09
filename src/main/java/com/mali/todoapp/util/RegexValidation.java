package com.mali.todoapp.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public class RegexValidation {

    private static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    public static boolean validateEmail(String emailStr) {
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
        return matcher.find();
    }
}
