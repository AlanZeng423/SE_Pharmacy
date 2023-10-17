package com.SE_Pharmacy.Pharmacy_BE.service.impl;
import org.springframework.stereotype.Service;
import com.SE_Pharmacy.Pharmacy_BE.po.Drug;
import com.SE_Pharmacy.Pharmacy_BE.service.DrugService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class DrugServiceImpl implements DrugService{
    @Autowired
    private DrugMapper drugMapper;

    @Override
    public List<Drug> getAllDrugs() {
        return drugMapper.getAllDrugs();
    }

    @Override
    public Drug getDrugById(int drugId) {
        return drugMapper.getDrugById(drugId);
    }

    @Override
    public void addDrug(Drug drug) {
        drugMapper.addDrug(drug);
    }
    @Override
    public void updateDrug(Drug drug) {
        drugMapper.updateDrug(drug);
    }

    @Override
    public void deleteDrug(String drugId) {
        drugMapper.deleteDrug(drugId);
    }
}
