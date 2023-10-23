package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "medicine")
public class Medicine {

    @Id
    @Column(name = "id", length = 10)
    private String id;

    @Column(name = "effective_date")
    private Date effectiveDate;

    @Column(name = "stock")
    private Integer stock;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getEffectiveDate() {
        return effectiveDate;
    }

    public void setEffectiveDate(Date effectiveDate) {
        this.effectiveDate = effectiveDate;
    }



}

