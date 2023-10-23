package com.SE_Pharmacy.Pharmacy_BE.service.impl;

import com.SE_Pharmacy.Pharmacy_BE.mapper.PatientMapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Patient;
import com.SE_Pharmacy.Pharmacy_BE.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientMapper patientMapper;

    @Override
    public void insertPatience(Patient patient) {
        patientMapper.insertPatience(patient);
    }

    @Override
    public void updatePatient(Patient patient) {
        patientMapper.updatePatient(patient);
    }

    @Override
    public void deletePatient(String id) {
        patientMapper.deletePatient(id);
    }

    @Override
    public String getNameById(String id) {
        return patientMapper.getNameById(id);
    }
}
