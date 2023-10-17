package com.SE_Pharmacy.Pharmacy_BE.service;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;


public interface BillService {
    public void insertBill(Bill bill);

    public List<Bill> getBillsByUserId(String userId);

    public Bill getBillById( Long billId);

    public void updatePaymentStatus( Long billId,  Boolean isPaid);

    public void deleteBill(long billId);
}
