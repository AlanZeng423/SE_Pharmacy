package com.SE_Pharmacy.Pharmacy_BE.service;
import com.SE_Pharmacy.Pharmacy_BE.po.Administrator;


public interface AdministratorService {
    Administrator getAdministratorById(String ano);
    void insertAdministrator(Administrator administrator);

    void updateAdministrator(Administrator administrator);

    void deleteAdministrator(String ano);

}
