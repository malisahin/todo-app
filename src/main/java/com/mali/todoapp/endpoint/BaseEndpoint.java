package com.mali.todoapp.endpoint;

import com.mali.todoapp.domain.ProcessResults;
import com.mali.todoapp.dto.ProcessResultDTO;

import java.io.Serializable;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public abstract class BaseEndpoint implements Serializable {

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


}
