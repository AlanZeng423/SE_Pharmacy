package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "appointment")
public class Appointment {
    @Id
    @Column(name = "ap_id", length = 255)
    private String apId;

    @Column(name = "d_id")
    private int dId;

    @Column(name = "p_id")
    private int pId;

    @Column(name = "date")
    private Date date;

    @Column(name = "time")
    private Time time;

    @Column(name = "state")
    private int state;

    public String getApId() {
        return apId;
    }

    public void setApId(String apId) {
        this.apId = apId;
    }

    public int getdId() {
        return dId;
    }

    public void setdId(int dId) {
        this.dId = dId;
    }

    public int getpId() {
        return pId;
    }

    public void setpId(int pId) {
        this.pId = pId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
