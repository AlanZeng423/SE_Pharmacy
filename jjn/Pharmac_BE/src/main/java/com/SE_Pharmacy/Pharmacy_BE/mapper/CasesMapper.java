package com.SE_Pharmacy.Pharmacy_BE.mapper;

import org.apache.ibatis.annotations.*;
import com.SE_Pharmacy.Pharmacy_BE.po.Cases;

import java.util.List;

public interface CasesMapper {
    @Insert("INSERT INTO Cases (c_id,p_id,d_id,date,medicine_id,gender,advice) " +
            "VALUES (#{c_id}, #{p_id}, #{d_id},#{date},#{medicine_id},#{gender},#{advice})")
    void insertCases(Cases cases);

    @Delete("DELETE FROM Cases WHERE c_id = #{c_id} AND medicine_id = #{medicine_id}")
    void deleteCases(Cases cases);

    @Update("UPDATE Cases SET c_id = #{c_id}, name = #{name}, pw = #{pw}")
    void updateCases(Cases cases);

    @Delete("DELETE FROM Cases WHERE c_id = #{c_id}")
    void deleteMedicines(@Param("c_id") Integer c_id);

    @Select("SELECT * FROM Cases WHERE c_id = #{c_id}")
    List<Cases> getMedicine(@Param("c_id") Integer c_id);
}
