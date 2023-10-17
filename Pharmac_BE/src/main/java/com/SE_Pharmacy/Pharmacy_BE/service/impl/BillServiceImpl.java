package com.SE_Pharmacy.Pharmacy_BE.service.impl;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SE_Pharmacy.Pharmacy_BE.mapper.AdministratorMapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import com.SE_Pharmacy.Pharmacy_BE.service.BillService;
import java.util.List;
@Service
public class BillServiceImpl implements BillService{
    @Autowired
    private BillMapper billMapper;

    @Override
    public void insertBill(Bill bill) {
        billMapper.insertBill(bill);
    }

    @Override
    public List<Bill> getBillsByUserId(String userId) {
        return billMapper.getBillsByUserId(userId);
    }

    @Override
    public Bill getBillById(Long billId) {
        return billMapper.getBillById(billId);
    }

    @Override
    public void updatePaymentStatus(Long billId, Boolean isPaid) {
        billMapper.updatePaymentStatus(billId, isPaid);
    }

    @Override
    public void deleteBill(long billId) {
        billMapper.deleteBill(billId);
    }
}
