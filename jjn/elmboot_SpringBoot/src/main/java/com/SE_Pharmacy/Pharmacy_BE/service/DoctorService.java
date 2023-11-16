package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.Doctor;
import org.apache.ibatis.annotations.Param;

public interface DoctorService {
    void insertDoctor(Doctor doctor);

    void updateDoctor(Doctor doctor);

    void deleteDoctor(@Param("d_id") String id);

    String getNameById(@Param("d_id") String id);
}
