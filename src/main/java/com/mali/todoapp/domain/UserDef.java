package com.mali.todoapp.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

/**
 * @author mali.sahin
 * @since 8.12.2018.
 */

@Table(name = "USER_DEF")
public class UserDef extends BaseDomain {

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
