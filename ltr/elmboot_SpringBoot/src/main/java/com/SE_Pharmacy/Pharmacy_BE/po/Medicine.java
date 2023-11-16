package com.SE_Pharmacy.Pharmacy_BE.po;

import java.util.Date;
public class Medicine {


    private String id;

    private Date effectiveDate;

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

