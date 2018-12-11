package com.mali.todoapp.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

/**
 * @author mali.sahin
 * @since 11.12.2018.
 */
public class TodoListFilterDTO {



    @JsonProperty
    public long id;

    @JsonProperty
    public long userId;

    @JsonProperty
    public String name;

    @JsonProperty
    public String description;

    @JsonProperty
    public Date creDateStart;

    @JsonProperty
    public Date creDateEnd;

    @JsonProperty
    public int first;

    @JsonProperty
    public int pageSize;


}
