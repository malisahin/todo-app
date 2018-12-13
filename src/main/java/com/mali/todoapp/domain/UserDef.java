package com.mali.todoapp.domain;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

/**
 * @author mali.sahin
 * @since 8.12.2018.
 */

@Data
@Table(name = "USER_DEF", schema = "todoapp")
@Entity
public class UserDef /*extends BaseDomain*/ {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long id;

    @NotBlank
    @Column(name = "USER_NAME")
    private String name;

    @NotBlank
    @Column(name = "EMAIL")
    private String email;

    @NotBlank
    @Column(name = "USER_PASSWORD")
    private String password;

    public UserDef(@NotBlank String email, @NotBlank String password) {
        this.email = email;
        this.password = password;
    }

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

    public UserDef() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
