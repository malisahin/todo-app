package com.mali.todoapp.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

/**
 * @author mali.sahin
 * @since 8.12.2018.
 */
@Data
@Table(name = "USER_DEF", schema = "todoapp")
public class UserDef extends BaseDomain {


    @Id
    @GeneratedValue(generator = "user_generator")
    private Long id;

    @NotBlank
    @Column(columnDefinition = "user_name")
    private String name;

    @NotBlank
    @Column(columnDefinition = "email")
    private String email;

    @NotBlank
    @Column(columnDefinition = "user_password")
    private String password;

    public UserDef(@NotBlank String email, @NotBlank String password) {
        this.email = email;
        this.password = password;
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
