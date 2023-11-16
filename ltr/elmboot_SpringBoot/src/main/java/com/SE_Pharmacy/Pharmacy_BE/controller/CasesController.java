package com.SE_Pharmacy.Pharmacy_BE.controller;

import com.SE_Pharmacy.Pharmacy_BE.po.Cases;
import com.SE_Pharmacy.Pharmacy_BE.service.CasesService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/CasesController")
public class CasesController {
    @Resource
    private CasesService casesService;

    @RequestMapping("/insertCases")
    public void insertCases(Cases cases){
        casesService.insertCases(cases);
    }

    @RequestMapping("/deleteCases")
    public void deleteCases(Cases cases){
        casesService.deleteCases(cases);
    }

    @RequestMapping("/updateCases")
    public void updateCases(Cases cases){
        casesService.updateCases(cases);
    }

    @RequestMapping("/deCases")
    public void deleteMedicines(@Param("c_id") Integer c_id){
        casesService.deleteMedicines(c_id);
    }

    @RequestMapping("/getMedicine")
    public List<Cases> getMedicine(@Param("c_id") Integer c_id){
        return casesService.getMedicine(c_id);
    }
}
