package com.mali.todoapp.util;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.mali.todoapp.dto.ProcessResultDTO;

import java.io.IOException;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public class Mapper {
    public static ProcessResultDTO convertJSONStringToObject(String json) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        JavaTimeModule module = new JavaTimeModule();
        mapper.registerModule(module);
        return mapper.readValue(json, ProcessResultDTO.class);
    }
}
