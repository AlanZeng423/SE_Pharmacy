package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;


@Entity
@Table(name = "administrator")
public class Administrator {

    @Id
    @Column(name = "ad_id", length = 10)
    private String ad_id;

    @Column(name = "aname", length = 100)
    private String aname;

    @Column(name = "password", length = 100)
    private String password;

    public String getAd_id() {
        return ad_id;
    }

    public void setAd_id(String ano) {
        this.ad_id = ad_id;
    }

    public String getAname() {
        return aname;
    }

    public void setAname(String aname) {
        this.aname = aname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}