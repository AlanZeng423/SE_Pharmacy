package com.SE_Pharmacy.Pharmacy_BE.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SE_Pharmacy.Pharmacy_BE.po.Administrator;


public interface AdministratorService {
    void insertAdministrator(Administrator administrator);

    void updateAdministrator(Administrator administrator);

    void deleteAdministrator(String ano);

}
