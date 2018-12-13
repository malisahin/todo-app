package com.mali.todoapp.domain;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.util.Date;

/**
 * @author mali.sahin
 * @since 10.12.2018.
 */


@Data
@Table(name = "TODO_ITEM", schema = "todoapp")
@Entity
public class TodoItem /*extends BaseDomain*/ {

    @Id
    @GeneratedValue(generator = "todo_item_generator")
    @Column(name = "ID", updatable = false, nullable = false)
    private Long id;


    @Column(name = "LIST_ID", nullable = false)
    private Long listId;

    @Column(name = "EXPLANATION", nullable = false)
    private String explanation;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "cre_date", nullable = false, updatable = false)
    @CreatedDate
    private Date creDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "upd_date")
    @LastModifiedDate
    private Date updDate;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public Date getCreDate() {
        return creDate;
    }

    public void setCreDate(Date creDate) {
        this.creDate = creDate;
    }

    public Date getUpdDate() {
        return updDate;
    }

    public void setUpdDate(Date updDate) {
        this.updDate = updDate;
    }
}
