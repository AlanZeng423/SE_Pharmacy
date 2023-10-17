package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Drug;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

public interface DrugMapper {
    // 获取药品列表
    List<Drug> getAllDrugs();

    // 获取特定药品信息
    Drug getDrugById(@Param("id") String id);

    // 添加新药品
    void addDrug(Drug drug);

    // 更新药品信息
    void updateDrug(Drug drug);

    // 删除药品
    void deleteDrug(@Param("id") String drugId);
}
