package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Drug;
import java.util.List;

import org.apache.ibatis.annotations.*;

@Mapper
public interface DrugMapper {

    //增加一个药物信息
    @Insert("INSERT INTO db_drugs (id, brand, name, function, dosage, banned, unit, prescription, picture, price) " +
            "VALUES (#{id}, #{brand}, #{name}, #{function}, #{dosage}, #{banned}, #{unit}, #{prescription}, #{picture}, #{price})")
    void addDrug(Drug drug);

    //删除一个药物信息
    @Delete("DELETE FROM db_drugs WHERE id = #{id}")
    void deleteDrug(String id);

    //获取所有药物信息
    @Select("SELECT * FROM db_drugs")
    List<Drug> getAllDrugs();

    //查询某个id的药物信息
    @Select("SELECT * FROM db_drugs WHERE id = #{id}")
    Drug getDrugById(String id);

    //更新某个药物的药物信息
    @Update("UPDATE db_drugs SET brand = #{brand}, name = #{name}, function = #{function}, " +
            "dosage = #{dosage}, banned = #{banned}, unit = #{unit}, prescription = #{prescription}, " +
            "picture = #{picture}, price = #{price} WHERE id = #{id}")
    void updateDrug(Drug drug);
}
