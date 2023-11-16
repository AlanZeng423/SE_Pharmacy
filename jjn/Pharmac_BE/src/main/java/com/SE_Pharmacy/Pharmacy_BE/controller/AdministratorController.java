package com.SE_Pharmacy.Pharmacy_BE.controller;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.SE_Pharmacy.Pharmacy_BE.po.Administrator;
import com.SE_Pharmacy.Pharmacy_BE.service.AdministratorService;

@RestController
@RequestMapping("/AdministratorController")
public class AdministratorController {
    @Autowired
    private AdministratorService administratorService;

    @RequestMapping("/insertAdministrator")
    public Administrator getAdministratorById(String ano){
        return administratorService.getAdministratorById(ano);
    }

    @RequestMapping("/insertAdministrator")
    public void insertAdministrator(Administrator administrator){
        administratorService.insertAdministrator(administrator);
    }

    @RequestMapping("/updateAdministrator")
    public void updateAdministrator(Administrator administrator){
        administratorService.updateAdministrator(administrator);
    }

    @RequestMapping("/deleteAdministrator")
    public void deleteAdministrator(String ano){
        administratorService.deleteAdministrator(ano);
    }
}
