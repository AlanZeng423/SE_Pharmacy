package com.SE_Pharmacy.Pharmacy_BE.po;

import javax.persistence.*;

@Entity
@Table(name = "doctor")
public class Doctor {

    @Id
    @Column(name = "d_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int d_id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "pw", length = 255)
    private String pw;

    public int getD_id() {
        return d_id;
    }

    public void setD_id(int d_id) {
        this.d_id = d_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }
}
