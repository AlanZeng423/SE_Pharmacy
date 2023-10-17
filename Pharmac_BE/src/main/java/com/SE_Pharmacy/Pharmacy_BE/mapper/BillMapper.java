package com.SE_Pharmacy.Pharmacy_BE.mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import org.apache.ibatis.annotations.*;
@Mapper
public interface BillMapper {
    // 添加挂号记录
    void insertBill(@Param("bill") Bill bill);

    //获取某个病人的所有订单
    List<Bill> getBillsByUserId(@Param("userId") String userId);

    // 获取某个billid的订单
    Bill getBillById(@Param("billId") Long billId);

    // 更新订单的支付状态
    void updatePaymentStatus(@Param("billId") Long billId, @Param("isPaid") Boolean isPaid);

    // 删除挂号记录
    void deleteBill(@Param("billId") long billId);

}
