package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.Cases;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CasesService {
    void insertCases(Cases cases);

    void deleteCases(Cases cases);

    void updateCases(Cases cases);

    void deleteMedicines(@Param("c_id") Integer c_id);

    List<Cases> getMedicine(@Param("c_id") Integer c_id);
}
