package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import org.apache.ibatis.annotations.*;


@Mapper
public interface BillMapper {

    @Insert("INSERT INTO bill (user_id, storehouse_id, order_date, paid_date, isPaid) " +
            "VALUES (#{userId}, #{storehouseId}, #{orderDate}, #{paidDate}, #{isPaid})")
    void addBill(Bill bill);

    @Delete("DELETE FROM bill WHERE bill_id = #{billId}")
    void deleteBill(int billId);

    @Select("SELECT * FROM bill WHERE storehouse_id = #{storehouseId}")
    List<Bill> getReservedPatients(int doctorId);

    @Select("SELECT * FROM bill WHERE bill_id = #{billId}")
    Bill getBillById(int billId);

    @Update("UPDATE bill SET user_id = #{userId}, storehouse_id = #{storehouseId}, " +
            "order_date = #{orderDate}, paid_date = #{paidDate}, isPaid = #{isPaid} " +
            "WHERE bill_id = #{billId}")
    void updateBill(Bill bill);
}
