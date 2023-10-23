package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.Medicine;

import java.util.List;

public interface MedicineService {

    void addMedicine(Medicine medicine);

    void deleteMedicine(String id);

    List<Medicine> getMedicines();

    Medicine getMedicineById(String id);

    void updateMedicine(Medicine medicine);
}
