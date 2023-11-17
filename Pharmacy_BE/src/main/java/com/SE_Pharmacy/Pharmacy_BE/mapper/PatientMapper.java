package com.SE_Pharmacy.Pharmacy_BE.mapper;

import com.SE_Pharmacy.Pharmacy_BE.po.Patient;
import org.apache.ibatis.annotations.*;

@Mapper
public interface PatientMapper {
    @Insert("INSERT INTO patient (p_id,name,pw,gender) " +
            "VALUES (#{p_id}, #{name}, #{pw},#{gender})")
    void insertPatience(Patient patient);

    @Update("UPDATE patient SET p_id = #{p_id}, name = #{name}, pw = #{pw},gender = #{gender}")
    void updatePatient(Patient patient);

    @Delete("DELETE FROM patient WHERE p_id = #{p_id}")
    void deletePatient(@Param("p_id") String p_id);

    @Select("SELECT * FROM doctor WHERE p_id = #{p_id}")
    String getNameById(@Param("p_id") String p_id);
}
