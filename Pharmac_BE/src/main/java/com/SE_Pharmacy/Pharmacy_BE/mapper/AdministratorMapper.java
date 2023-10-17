package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Administrator;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdministratorMapper {

    Administrator getAdministratorById(String ano);

    void insertAdministrator(Administrator administrator);

    void updateAdministrator(Administrator administrator);

    void deleteAdministrator(String ano);
}
