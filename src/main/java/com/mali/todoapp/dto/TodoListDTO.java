package com.mali.todoapp.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class TodoListDTO {

    @JsonProperty
    public long id;

    @JsonProperty
    public long userId;

    @JsonProperty
    public String name;

    @JsonProperty
    public String description;
}
