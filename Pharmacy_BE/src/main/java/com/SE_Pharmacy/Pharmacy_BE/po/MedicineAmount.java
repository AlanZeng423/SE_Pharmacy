package com.SE_Pharmacy.Pharmacy_BE.po;


public class MedicineAmount {
    private int cId;

    private String medicineId;

    private int amount;

    public int getCId() {
        return cId;
    }

    public void setCId(int cId) {
        this.cId = cId;
    }

    public String getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(String medicineId) {
        this.medicineId = medicineId;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
