package com.SE_Pharmacy.Pharmacy_BE.controller;

import com.SE_Pharmacy.Pharmacy_BE.po.Window;
import com.SE_Pharmacy.Pharmacy_BE.service.WindowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/windows")
public class WindowController {

    private final WindowService windowService;

    @Autowired
    public WindowController(WindowService windowService) {
        this.windowService = windowService;
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addWindow(@RequestBody Window window) {
        windowService.addWindow(window);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{wid}")
    public ResponseEntity<Void> deleteWindow(@PathVariable String wid) {
        windowService.deleteWindow(wid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/storehouse/{storehouseId}")
    public ResponseEntity<List<Window>> getWindowsByStorehouse(@PathVariable String storehouseId) {
        List<Window> windows = windowService.getWindowsByStorehouse(storehouseId);
        return new ResponseEntity<>(windows, HttpStatus.OK);
    }

    @GetMapping("/bill/{billId}")
    public ResponseEntity<Window> getWindowByBillId(@PathVariable Long billId) {
        Window window = windowService.getWindowByBillId(billId);
        return new ResponseEntity<>(window, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updateWindow(@RequestBody Window window) {
        windowService.updateWindow(window);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
