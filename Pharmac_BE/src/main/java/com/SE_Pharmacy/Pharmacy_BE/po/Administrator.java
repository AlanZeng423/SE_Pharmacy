package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "administrator")
public class Administrator {

    @Id
    @Column(name = "ano", length = 10)
    private String ano;

    @Column(name = "aname", length = 100)
    private String aname;

    @Column(name = "password", length = 100)
    private String password;

    @Column(name = "phonenumber", length = 100)
    private String phonenumber;

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
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

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }
}