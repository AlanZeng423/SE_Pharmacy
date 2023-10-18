package com.SE_Pharmacy.Pharmacy_BE.service.impl;
import com.SE_Pharmacy.Pharmacy_BE.mapper.DrugMapper;
import org.springframework.stereotype.Service;
import com.SE_Pharmacy.Pharmacy_BE.po.Drug;
import com.SE_Pharmacy.Pharmacy_BE.service.DrugService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrugServiceImpl implements DrugService {

    private final DrugMapper drugMapper;

    @Autowired
    public DrugServiceImpl(DrugMapper drugMapper) {
        this.drugMapper = drugMapper;
    }

    @Override
    public void addDrug(Drug drug) {
        drugMapper.addDrug(drug);
    }

    @Override
    public void deleteDrug(String id) {
        drugMapper.deleteDrug(id);
    }

    @Override
    public List<Drug> getAllDrugs() {
        return drugMapper.getAllDrugs();
    }

    @Override
    public Drug getDrugById(String id) {
        return drugMapper.getDrugById(id);
    }

    @Override
    public void updateDrug(Drug drug) {
        drugMapper.updateDrug(drug);
    }
}
