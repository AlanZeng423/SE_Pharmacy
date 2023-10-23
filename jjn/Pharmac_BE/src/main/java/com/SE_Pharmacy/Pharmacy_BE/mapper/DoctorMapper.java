package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Doctor;
import org.apache.ibatis.annotations.*;


@Mapper
public interface DoctorMapper {
    @Insert("INSERT INTO doctor (d_id,name,pw) " +
            "VALUES (#{d_id}, #{name}, #{pw})")
    void insertDoctor(Doctor doctor);

    @Update("UPDATE doctor SET d_id = #{d_id}, name = #{name}, pw = #{pw}")
    void updateDoctor(Doctor doctor);

    @Delete("DELETE FROM doctor WHERE d_id = #{d_id}")
    void deleteDoctor(@Param("d_id") String id);

    @Delete("SELECT * FROM doctor WHERE d_id = #{d_id}")
    String getNameById(@Param("d_id") String id);
}
