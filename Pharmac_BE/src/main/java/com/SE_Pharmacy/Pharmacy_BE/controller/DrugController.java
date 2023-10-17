package com.SE_Pharmacy.Pharmacy_BE.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import com.SE_Pharmacy.Pharmacy_BE.po.Drug;
import com.SE_Pharmacy.Pharmacy_BE.service.DrugService;
import java.util.List;

@RestController
@RequestMapping("/drugs")
public class DrugController {
    @Autowired
    private DrugService drugService;

    // 获取所有药品列表
    @GetMapping("/all")
    public List<Drug> getAllDrugs() {
        return drugService.getAllDrugs();
    }

    // 获取特定药品信息
    @GetMapping("/{drugId}")
    public Drug getDrugById(@PathVariable int drugId) {
        return drugService.getDrugById(drugId);
    }

    // 添加新药品
    @PostMapping("/add")
    public void addDrug(@RequestBody Drug drug) {
        drugService.addDrug(drug);
    }

    // 更新药品信息
    @PutMapping("/update")
    public void updateDrug(@RequestBody Drug drug) {
        drugService.updateDrug(drug);
    }

    // 删除药品
    @DeleteMapping("/delete/{drugId}")
    public void deleteDrug(@PathVariable int drugId) {
        drugService.deleteDrug(drugId);
    }
}
