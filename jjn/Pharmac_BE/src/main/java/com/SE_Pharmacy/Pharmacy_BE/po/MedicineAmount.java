package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;

@Entity
@Table(name = "medicineamount")
public class MedicineAmount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "c_id")
    private int cId;

    @Id
    @Column(name = "medicine_id", length = 10)
    private String medicineId;

    @Column(name = "amount")
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
