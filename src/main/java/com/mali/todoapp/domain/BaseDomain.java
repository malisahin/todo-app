package com.mali.todoapp.domain;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * @author mali.sahin
 * @since 8.12.2018.
 */

@Data
@Table(schema = "todoapp")
@Entity
public abstract class BaseDomain implements Serializable {

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
}
