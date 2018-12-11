package com.mali.todoapp.domain;

import lombok.Data;

import javax.persistence.*;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */


@Data
@Table(name = "TODO_ITEM", schema = "todoapp")
@Entity
public class TodoItem extends BaseDomain {

    @Id
    @GeneratedValue(generator = "todo_item_generator")
    @Column(name = "ID", updatable = false, nullable = false)
    private long id;


    @Column(name = "LIST_ID", nullable = false)
    private long listId;

    @Column(name = "EXPLANATION", nullable = false)
    private String explanation;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getListId() {
        return listId;
    }

    public void setListId(long listId) {
        this.listId = listId;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }
}
