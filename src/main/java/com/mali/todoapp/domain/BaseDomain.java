package com.mali.todoapp.domain;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.io.Serializable;
import java.util.Date;

/**
 * @author mali.sahin
 * @since 8.12.2018.
 */
public abstract class BaseDomain implements Serializable {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "cre_date", nullable = false, updatable = false)
    @CreatedDate
    private Date creDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "upd_date", nullable = false)
    @LastModifiedDate
    private Date updDate;

}
