package com.SE_Pharmacy.Pharmacy_BE.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.SE_Pharmacy.Pharmacy_BE.po.Drug;
public interface DrugService {
    public List<Drug> getAllDrugs();

    public Drug getDrugById(int drugId);

    public void addDrug(Drug drug);

    public void updateDrug(Drug drug);

    public void deleteDrug(String drugId);
}
