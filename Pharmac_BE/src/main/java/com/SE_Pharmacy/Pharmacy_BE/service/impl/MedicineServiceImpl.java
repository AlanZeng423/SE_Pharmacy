package com.SE_Pharmacy.Pharmacy_BE.service.impl;
import com.SE_Pharmacy.Pharmacy_BE.mapper.DrugMapper;
import com.SE_Pharmacy.Pharmacy_BE.mapper.MedicineMapper;
import org.springframework.stereotype.Service;
import com.SE_Pharmacy.Pharmacy_BE.po.Medicine;
import com.SE_Pharmacy.Pharmacy_BE.service.MedecineSercie;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;
public class MedecineServiceImpl implements MedecineSercie{
    private final MedecineMa drugMapper;
    @Override
    public List<Medicine> getAllMedcne() {
        return ;
    }

    @Override
    public Medicine getMedcineBystorehouse_id(String storehouse_id) {
        return null;
    }

    @Override
    public List<Medicine> findExpiredMedicines(Date currentDate) {
        return null;
    }
}
