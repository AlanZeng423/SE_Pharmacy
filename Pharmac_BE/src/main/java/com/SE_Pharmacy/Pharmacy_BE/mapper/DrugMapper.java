package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Drug;
import java.util.List;

import org.apache.ibatis.annotations.*;

@Mapper
public interface DrugMapper {

    @Insert("INSERT INTO db_drugs (id, brand, name, function, dosage, banned, unit, prescription, picture, price) " +
            "VALUES (#{id}, #{brand}, #{name}, #{function}, #{dosage}, #{banned}, #{unit}, #{prescription}, #{picture}, #{price})")
    void addDrug(Drug drug);

    @Delete("DELETE FROM db_drugs WHERE id = #{id}")
    void deleteDrug(String id);

    @Select("SELECT * FROM db_drugs")
    List<Drug> getAllDrugs();

    @Select("SELECT * FROM db_drugs WHERE id = #{id}")
    Drug getDrugById(String id);

    @Update("UPDATE db_drugs SET brand = #{brand}, name = #{name}, function = #{function}, " +
            "dosage = #{dosage}, banned = #{banned}, unit = #{unit}, prescription = #{prescription}, " +
            "picture = #{picture}, price = #{price} WHERE id = #{id}")
    void updateDrug(Drug drug);
}
