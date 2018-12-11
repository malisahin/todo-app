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
    public List<String> infoMessages = new ArrayList<>();

    @JsonProperty
    public List<Object> objects = new ArrayList<>();

    public ProcessResultDTO() {
    }

    public ProcessResultDTO(Builder builder) {
        this.errorMessages = builder.getErrorMessages();
        this.infoMessages = builder.getInfoMessages();
        this.objects = builder.getObjects();
    }


    public List<String> getErrorMessages() {
        return errorMessages;
    }

    public void setErrorMessages(List<String> errorMessages) {
        this.errorMessages = errorMessages;
    }

    public List<String> getInfoMessages() {
        return infoMessages;
    }

    public void setInfoMessages(List<String> infoMessages) {
        this.infoMessages = infoMessages;
    }

    public List<Object> getObjects() {
        return objects;
    }

    public void setObjects(List<Object> objects) {
        this.objects = objects;
    }

    public static class Builder {

        private List<String> errorMessages;

        private List<String> infoMessages;

        private List<Object> objects;

        public Builder() {
            errorMessages = new ArrayList<>();
            infoMessages = new ArrayList<>();
            objects = new ArrayList<>();
        }

        public Builder addObject(Object object) {
            this.objects.add(object);
            return this;
        }

        public Builder setObjectAsList(List list) {
            this.objects = list;
            return this;
        }

        public Builder addErrorMessage(String error) {
            this.errorMessages.add(error);
            return this;
        }

        public Builder addInfoMessage(String info) {
            this.infoMessages.add(info);
            return this;
        }

        public ProcessResultDTO build() {
            return new ProcessResultDTO(this);
        }

        public List<String> getErrorMessages() {
            return errorMessages;
        }

        public List<String> getInfoMessages() {
            return infoMessages;
        }

        public List<Object> getObjects() {
            return objects;
        }
    }
}
