package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.MedicineAmount;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MedicineAmountService {
    void insertMedicineAmount(MedicineAmount medicineAmount);

    void updateMedicineAmount(MedicineAmount medicineAmount);

    void deleteMedicineAmount(@Param("c_id") String cId,@Param("medicine_id") String medicineId);

    List<MedicineAmount> getMedicineAmountByCId(@Param("c_id") String cId);
}
