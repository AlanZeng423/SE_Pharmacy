package com.SE_Pharmacy.Pharmacy_BE.service;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;


import java.util.List;

public interface BillService {

    void addBill(Bill bill);

    void deleteBill(long billId);

    List<Bill> getReservedPatients(String storehouseId);

    Bill getBillById(long billId);

    void updateBill(Bill bill);
}






