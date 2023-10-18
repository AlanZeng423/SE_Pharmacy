package com.SE_Pharmacy.Pharmacy_BE.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SE_Pharmacy.Pharmacy_BE.mapper.AdministratorMapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Administrator;
import com.SE_Pharmacy.Pharmacy_BE.service.AdministratorService;

@Service
public class AdministratorServiceImpl implements AdministratorService {
    @Autowired
    private AdministratorMapper administratorMapper;

    @Override
    public void insertAdministrator(Administrator administrator){
        administratorMapper.insertAdministrator(administrator);
    }

    @Override
    public void updateAdministrator(Administrator administrator) {
        administratorMapper.updateAdministrator(administrator);
    }

    @Override
    public void deleteAdministrator(String ano) {
        administratorMapper.deleteAdministrator(ano);
    }
}
