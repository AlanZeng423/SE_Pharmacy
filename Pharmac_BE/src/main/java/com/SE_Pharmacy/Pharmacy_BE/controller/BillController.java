package com.SE_Pharmacy.Pharmacy_BE.controller;

import com.SE_Pharmacy.Pharmacy_BE.po.Bill;
import com.SE_Pharmacy.Pharmacy_BE.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bills")
public class BillController {

    private final BillService billService;

    @Autowired
    public BillController(BillService billService) {
        this.billService = billService;
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addBill(@RequestBody Bill bill) {
        billService.addBill(bill);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{billId}")
    public ResponseEntity<Void> deleteBill(@PathVariable int billId) {
        billService.deleteBill(billId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/reserved-patients/{doctorId}")
    public ResponseEntity<List<Bill>> getReservedPatients(@PathVariable int doctorId) {
        List<Bill> reservedPatients = billService.getReservedPatients(doctorId);
        return new ResponseEntity<>(reservedPatients, HttpStatus.OK);
    }

    @GetMapping("/{billId}")
    public ResponseEntity<Bill> getBillById(@PathVariable int billId) {
        Bill bill = billService.getBillById(billId);
        return new ResponseEntity<>(bill, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updateBill(@RequestBody Bill bill) {
        billService.updateBill(bill);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}


