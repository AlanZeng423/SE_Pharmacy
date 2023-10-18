package com.SE_Pharmacy.Pharmacy_BE.service.impl;
import com.SE_Pharmacy.Pharmacy_BE.mapper.BillMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import com.SE_Pharmacy.Pharmacy_BE.service.BillService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillServiceImpl implements BillService {

    private final BillMapper billMapper;

    @Autowired
    public BillServiceImpl(BillMapper billMapper) {
        this.billMapper = billMapper;
    }

    @Override
    public void addBill(Bill bill) {
        billMapper.addBill(bill);
    }

    @Override
    public void deleteBill(long billId) {
        billMapper.deleteBill(billId);
    }

    @Override
    public List<Bill> getReservedPatients(String storehouseId) {
        return billMapper.getReservedPatients(storehouseId);
    }

    @Override
    public Bill getBillById(int billId) {
        return billMapper.getBillById(billId);
    }

    @Override
    public void updateBill(Bill bill) {
        billMapper.updateBill(bill);
    }
}

