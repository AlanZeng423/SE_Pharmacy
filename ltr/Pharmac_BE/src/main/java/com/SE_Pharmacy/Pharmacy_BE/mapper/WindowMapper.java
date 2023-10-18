package com.SE_Pharmacy.Pharmacy_BE.mapper;

import com.SE_Pharmacy.Pharmacy_BE.po.Window;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface WindowMapper {

    @Insert("INSERT INTO se_window (wid, bill_id, storehouse_id) VALUES (#{wid}, #{billId}, #{storehouseId})")
    void addWindow(Window window);

    @Delete("DELETE FROM se_window WHERE wid = #{wid}")
    void deleteWindow(String wid);

    @Select("SELECT * FROM se_window WHERE storehouse_id = #{storehouseId}")
    List<Window> getWindowsByStorehouse(String storehouseId);

    @Select("SELECT * FROM se_window WHERE bill_id = #{billId}")
    Window getWindowByBillId(Long billId);

    @Update("UPDATE se_window SET bill_id = #{billId}, storehouse_id = #{storehouseId} WHERE wid = #{wid}")
    void updateWindow(Window window);
}




