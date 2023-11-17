package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.Patient;
import org.apache.ibatis.annotations.Param;

public interface PatientService {
    void insertPatience(Patient patient);

    void updatePatient(Patient patient);

    void deletePatient(@Param("p_id") String id);

    String getNameById(@Param("p_id") String id);
}
