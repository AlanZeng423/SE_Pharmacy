package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;

@Entity
@Table(name = "db_drugs")
public class Drug {

    @Id
    @Column(name = "id", length = 10)
    private String id;

    @Column(name = "brand", length = 255)
    private String brand;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "function", columnDefinition = "TEXT")
    private String function;

    @Column(name = "dosage", columnDefinition = "TEXT")
    private String dosage;

    @Column(name = "banned", columnDefinition = "TEXT")
    private String banned;

    @Column(name = "unit", length = 255)
    private String unit;

    @Column(name = "prescription")
    private Boolean prescription;

    @Column(name = "picture", length = 255)
    private String picture;

    @Column(name = "price")
    private Float price;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFunction() {
        return function;
    }

    public void setFunction(String function) {
        this.function = function;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getBanned() {
        return banned;
    }

    public void setBanned(String banned) {
        this.banned = banned;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Boolean getPrescription() {
        return prescription;
    }

    public void setPrescription(Boolean prescription) {
        this.prescription = prescription;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
}
