package com.mali.todoapp.endpoint;

import com.mali.todoapp.dto.ProcessResultDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.Serializable;
import java.util.List;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public abstract class BaseEndpoint implements Serializable {

/*
    public ProcessResultDTO convertDomainToDto(ProcessResults domain) {
        ProcessResultDTO dto = new ProcessResultDTO();
        dto.errorMessages = domain.getErrorMessages();
        dto.infoMessages = domain.getInfoMessages();
        dto.objects = domain.getObjects();

        return dto;
    }


    public ProcessResultDTO convertExceptionToDto(Exception e) {
        ProcessResultDTO dto = new ProcessResultDTO();
        dto.errorMessages.add(e.getMessage());
        return dto;
    }
*/


    public ResponseEntity<ProcessResultDTO> returnObjectAsProcessResult(Object object) {

        ProcessResultDTO result;
        if (object instanceof List) {
            result =
                    new ProcessResultDTO.Builder()
                            .setObjectAsList((List) object)
                            .build();
        } else {
            result = new ProcessResultDTO.Builder().addObject(object).build();
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    public ResponseEntity<ProcessResultDTO> returnExceptionAsProcessResult(Exception e) {
        return new ResponseEntity<>(new ProcessResultDTO.Builder().addErrorMessage(e.getMessage()).build(), HttpStatus.BAD_REQUEST);
    }
}
