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
@Table(name = "TODO_LIST", schema = "todoapp")
@Entity
public class TodoList /*extends BaseDomain */{


    public TodoList() {
        super();
    }

    @Id
    @GeneratedValue(generator = "todo_list_generator")
    @Column(name = "ID", updatable = false, nullable = false)
    private Long id;

    @Column(name = "USER_ID", nullable = false)
    private Long userId;

    @Column(name = "LIST_NAME", length = 50, nullable = false)
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "cre_date", nullable = false, updatable = false)
    @CreatedDate
    private Date creDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "upd_date")
    @LastModifiedDate
    private Date updDate;


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


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
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
