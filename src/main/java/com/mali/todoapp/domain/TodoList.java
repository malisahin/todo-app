package com.mali.todoapp.domain;

import javax.persistence.*;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */

@Table(name = "TODO_LIST")
public class TodoList extends BaseDomain {


    public TodoList() {
        super();
    }

    @Id
    @GeneratedValue(generator = "todo_list_generator")
    @Column(name = "ID", updatable = false, nullable = false)
    private long id;

    @Column(name = "USER_ID", nullable = false)
    private long userId;

    @Column(name = "LIST_NAME", length = 50, nullable = false)
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
