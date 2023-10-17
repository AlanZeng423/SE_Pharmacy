package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Administrator;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface AdministratorMapper {

    Administrator getAdministratorById(@Param("ano") String ano);

    void insertAdministrator(Administrator administrator);

    void updateAdministrator(Administrator administrator);

    void deleteAdministrator(@Param("ano") String ano);
}
