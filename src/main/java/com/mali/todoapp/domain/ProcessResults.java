package com.mali.todoapp.domain;

import java.util.ArrayList;
import java.util.List;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
public class ProcessResults {

    private List<String> errorMessages;

    private List<String> infoMessages;

    private List<Object> objects;


    public ProcessResults() {
        errorMessages = new ArrayList<>();
        infoMessages = new ArrayList<>();
        objects = new ArrayList<>();
    }

    public ProcessResults(Object object) {
        errorMessages = new ArrayList<>();
        infoMessages = new ArrayList<>();
        objects = new ArrayList<>();
        objects.add(object);
    }



    public boolean isErrorMessagesNull() {
        return !(errorMessages.size() > 0);
    }

    public boolean isErrorMessagesNotNull() {
        return this.errorMessages.size() > 0;
    }

    public boolean isAnyObjectExist() {
        return objects.size() > 0;
    }

    public void addErrorMessage(String message) {
        errorMessages.add(message);
    }

    public void addInfoMessage(String message) {
        this.infoMessages.add(message);
    }

    public void addObject(Object object) {
        this.objects.add(object);
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
