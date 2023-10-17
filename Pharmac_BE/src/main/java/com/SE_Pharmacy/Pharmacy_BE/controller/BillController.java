package com.SE_Pharmacy.Pharmacy_BE.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import com.SE_Pharmacy.Pharmacy_BE.service.BillService;
import java.util.List;

@RestController
@RequestMapping("/bill")
public class BillController {
    @Autowired
    private BillService billService;

    // 添加挂号记录
    @PostMapping("/add")
    public void addBill(@RequestBody Bill bill) {
        billService.addBill(bill);
    }

    // 删除挂号记录
    @DeleteMapping("/delete/{billId}")
    public void deleteBill(@PathVariable int billId) {
        billService.deleteBill(billId);
    }

    // 获取已预约患者列表
    @GetMapping("/reserved-patients/{doctorId}")
    public List<Bill> getReservedPatients(@PathVariable int doctorId) {
        return billService.getReservedPatients(doctorId);
    }

    // 获取患者的挂号记录
    @GetMapping("/{patientId}")
    public Bill getBillByPatientId(@PathVariable int patientId) {
        return billService.getBillByPatientId(patientId);
    }

    // 更新挂号记录
    @PutMapping("/update")
    public void updateBill(@RequestBody Bill bill) {
        billService.updateBill(bill);
    }
}
