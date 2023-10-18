package com.SE_Pharmacy.Pharmacy_BE.service;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;


import java.util.List;

public interface BillService {

    void addBill(Bill bill);

    void deleteBill(int billId);

    List<Bill> getReservedPatients(int doctorId);

    Bill getBillById(int billId);

    void updateBill(Bill bill);
}






