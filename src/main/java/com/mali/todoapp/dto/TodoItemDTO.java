package com.mali.todoapp.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

/**
 * @author mali.sahin
 * @since 11.12.2018.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class TodoItemDTO {

    @JsonProperty
    public Long id;


    @JsonProperty
    public Long listId;

    @JsonProperty
    public String explanation;

    @JsonProperty
    public Date creDate;

}
