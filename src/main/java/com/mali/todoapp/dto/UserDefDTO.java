package com.mali.todoapp.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDefDTO {

    @JsonProperty
    public Long id;

    @JsonProperty
    public String name;

    @JsonProperty
    public String email;

    @JsonProperty
    public String password;
}
