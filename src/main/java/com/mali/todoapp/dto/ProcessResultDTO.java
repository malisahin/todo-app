package com.mali.todoapp.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public class ProcessResultDTO {

    @JsonProperty
    public List<String> errorMessages = new ArrayList<>();

    @JsonProperty
    public List<String> infoMessages=  new ArrayList<>();

    @JsonProperty
    public List<Object> objects = new ArrayList<>();
}
