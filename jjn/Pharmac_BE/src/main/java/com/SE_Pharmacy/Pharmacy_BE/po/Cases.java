package com.SE_Pharmacy.Pharmacy_BE.po;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "cases")
public class Cases {

    @Id
    @Column(name = "c_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cId;

    @Id
    @Column(name = "p_id")
    private int pId;

    @Id
    @Column(name = "d_id")
    private int dId;

    @Column(name = "date")
    private Date date;

    @Column(name = "medicine_id")
    private int medicineId;

    @Column(name = "gender", length = 5)
    private String gender;

    @Column(name = "advice", columnDefinition = "TEXT")
    private String advice;

    public int getcId() {
        return cId;
    }

    public void setcId(int cId) {
        this.cId = cId;
    }

    public int getpId() {
        return pId;
    }

    public void setpId(int pId) {
        this.pId = pId;
    }

    public int getdId() {
        return dId;
    }

    public void setdId(int dId) {
        this.dId = dId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(int medicineId) {
        this.medicineId = medicineId;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAdvice() {
        return advice;
    }

    public void setAdvice(String advice) {
        this.advice = advice;
    }
}

