package com.SE_Pharmacy.Pharmacy_BE.service;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import com.SE_Pharmacy.Pharmacy_BE.po.Medicine;

public interface MedecineSercie {
    List<Medicine> getAllMedcne();

    Medicine getMedcineBystorehouse_id(String storehouse_id);

    List<Medicine> findExpiredMedicines(@Param("currentDate") Date currentDate);
}
