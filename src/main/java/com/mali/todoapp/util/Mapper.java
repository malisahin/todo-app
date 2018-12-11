package com.mali.todoapp.util;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.mali.todoapp.dto.ProcessResultDTO;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public class Mapper {
    private static ObjectMapper mapper = new ObjectMapper();

    public static ProcessResultDTO convertJSONStringToObject(String json) throws IOException {

        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        JavaTimeModule module = new JavaTimeModule();
        mapper.registerModule(module);
        return mapper.readValue(json, ProcessResultDTO.class);
    }

    public static <T> T convertJsonStringToProcessResultSingleObject(String json, Class<T> type) throws IOException {

        ProcessResultDTO resultDTO = mapper.readValue(json, ProcessResultDTO.class);

        json = mapper.writeValueAsString(resultDTO.objects.get(0));

        return mapper.readValue(json, type);

    }

    public static <T> List<T> convertJsonStringToListObject(String json, Class<T> type) throws IOException {


        List<T> resultList = new ArrayList<>();
        ProcessResultDTO resultDTO = mapper.readValue(json, ProcessResultDTO.class);


        resultDTO.objects.forEach(dto -> {
            try {
                String dtoString = mapper.writeValueAsString(dto);
                resultList.add(mapper.readValue(dtoString, type));

            } catch (IOException e) {
                e.printStackTrace();
            }

        });

        return resultList;


    }
}
